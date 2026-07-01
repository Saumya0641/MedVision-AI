from langchain_chroma import Chroma

from .embed import embeddings
from .config import CHROMA_DB

db = Chroma(
    persist_directory=str(CHROMA_DB),
    embedding_function=embeddings,
)

retriever = db.as_retriever(
    search_type="similarity",
    search_kwargs={
        "k": 6
    }
)


def retrieve(query):
    docs = retriever.invoke(query)
    return docs