from pathlib import Path

from langchain_community.document_loaders import PyPDFLoader


def load_documents(folder: str):
    documents = []

    folder = Path(folder)

    for pdf in folder.rglob("*.pdf"):
        loader = PyPDFLoader(str(pdf))
        documents.extend(loader.load())

    return documents