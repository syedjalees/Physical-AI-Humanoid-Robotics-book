import os
import httpx  # <--- Hum ab library ke bajaye direct HTTP use karenge
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from openai import OpenAI

# 1. Load Settings
load_dotenv()

router = APIRouter()

# 2. Setup (No QdrantClient needed)
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
COLLECTION_NAME = "textbook_collection"

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        print(f"🔍 Searching for: {request.message}")

        # Step A: User Query ko Numbers (Vector) mein badlen
        emb_response = client.embeddings.create(
            input=request.message,
            model="text-embedding-3-small"
        )
        user_vector = emb_response.data[0].embedding

        # Step B: Direct API Call to Qdrant (Bypassing Library Issues)
        # Hum seedha Qdrant ke server se baat karenge
        search_url = f"{QDRANT_URL}/collections/{COLLECTION_NAME}/points/search"
        
        headers = {
            "api-key": QDRANT_API_KEY,
            "Content-Type": "application/json"
        }
        
        payload = {
            "vector": user_vector,
            "limit": 3,
            "with_payload": True
        }

        # Request bhej rahe hain...
        async with httpx.AsyncClient() as http_client:
            response = await http_client.post(search_url, json=payload, headers=headers)
            
            if response.status_code != 200:
                print(f"❌ Qdrant Error: {response.text}")
                raise Exception("Database connection failed")
                
            search_results = response.json().get("result", [])

        # Step C: Context Jama Karein
        context = ""
        for item in search_results:
            # Direct JSON data access
            text = item.get("payload", {}).get("text", "")
            context += text + "\n---\n"

        if not context.strip():
            context = "No relevant context found in the book."

        print("✅ Context found! Generating answer...")

        # Step D: OpenAI se Jawab Lein
        system_prompt = f"""You are a Robotics Tutor. Answer based ONLY on this context:
        
        {context}
        
        If answer is not in context, say 'I don't know based on the book'."""

        ai_response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": request.message}
            ]
        )

        return {"response": ai_response.choices[0].message.content}

    except Exception as e:
        print(f"❌ Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))