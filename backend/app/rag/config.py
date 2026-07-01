from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]

KNOWLEDGE_BASE = BASE_DIR / "knowledge_base"

CHROMA_DB = BASE_DIR / "chroma_db"

EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"

CHUNK_SIZE = 800

CHUNK_OVERLAP = 150