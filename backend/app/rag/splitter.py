from langchain_text_splitters import RecursiveCharacterTextSplitter

from .config import CHUNK_SIZE
from .config import CHUNK_OVERLAP

splitter = RecursiveCharacterTextSplitter(

    chunk_size=CHUNK_SIZE,

    chunk_overlap=CHUNK_OVERLAP

)

def split_documents(documents):

    return splitter.split_documents(documents)