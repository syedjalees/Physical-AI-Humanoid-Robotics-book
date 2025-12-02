import logging
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from routes import chat  # <--- Ye humne naya add kiya hai

# Logging setup
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# CORS: Taake frontend isse baat kar sake
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Chat Router ko Jodna (Connect)
app.include_router(chat.router, prefix="/api", tags=["Chat"])

@app.get("/")
async def root():
    return {"message": "FastAPI RAG Backend is Running with Chat!"}