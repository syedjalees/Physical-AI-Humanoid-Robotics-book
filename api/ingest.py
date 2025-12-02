import os
import glob
from dotenv import load_dotenv
from qdrant_client import QdrantClient
from qdrant_client.http import models
from openai import OpenAI

# 1. Environment Variables Load karein
load_dotenv()

# 2. Clients Setup
qdrant = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY")
)
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

COLLECTION_NAME = "textbook_collection"

# 3. Collection (Folder) Banayen Qdrant mein
try:
    qdrant.create_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE),
    )
    print(f"✅ Collection '{COLLECTION_NAME}' created!")
except Exception:
    print(f"ℹ️ Collection '{COLLECTION_NAME}' already exists.")

# 4. Book ki Files Read Karein
# Note: Hum maan rahe hain ke book "my-book" folder mein hai
book_path = "../my-book/docs/**/*.md"
files = glob.glob(book_path, recursive=True)

print(f"📚 Found {len(files)} markdown files in book.")

points = []
idx = 0

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()
        
        # Agar file khali hai to skip karein
        if not text.strip():
            continue

        # Filename ko as metadata use karein
        file_name = os.path.basename(file_path)
        print(f"Processing: {file_name}...")

        # 5. Embedding Generate Karein (OpenAI)
        response = client.embeddings.create(
            input=text[:8000], # Limit text size to avoid errors
            model="text-embedding-3-small"
        )
        embedding = response.data[0].embedding

        # 6. Point Prepare Karein
        points.append(models.PointStruct(
            id=idx,
            vector=embedding,
            payload={"text": text, "source": file_name}
        ))
        idx += 1

# 7. Database mein Upload Karein
if points:
    qdrant.upsert(
        collection_name=COLLECTION_NAME,
        points=points
    )
    print(f"🎉 Success! {len(points)} chapters uploaded to Qdrant Database.")
else:
    print("❌ No text found to upload.")