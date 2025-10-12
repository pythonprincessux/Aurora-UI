from fastapi import APIRouter
from src.shuffle import true_shuffle

router = APIRouter()

@router.get("/")
def get_shuffled():
    songs = ["Track A", "Track B", "Track C", "Track D"]
    shuffled = true_shuffle(songs)
    return {"mode": "true-shuffle", "result": shuffled}