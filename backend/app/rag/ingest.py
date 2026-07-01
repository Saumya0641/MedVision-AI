from .config import KNOWLEDGE_BASE

from .loader import load_documents

from .splitter import split_documents

from .vectordb import db

docs = load_documents(KNOWLEDGE_BASE)

chunks = split_documents(docs)

db.add_documents(chunks)

print("Knowledge Base Built")

print(len(chunks))