from langchain_chroma import Chroma

from .embed import embeddings

from .config import CHROMA_DB

db = Chroma(

    persist_directory=str(CHROMA_DB),

    embedding_function=embeddings

)