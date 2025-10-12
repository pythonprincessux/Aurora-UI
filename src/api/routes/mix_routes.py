from fastapi import APIRouter
from src.shuffle import auto_mix

router = APIRouter()

@router.get("/")
def get_auto_mix():
    songs = ["Track A", "Track B", "Track C", "Track D"]
    metadata = {
        "Track A": {"tempo": 120, "mood": "chill"},
        "Track B": {"tempo": 90, "mood": "sad"},
        "Track C": {"tempo": 140, "mood": "hype"},
        "Track D": {"tempo": 110, "mood": "neutral"},
    }
    mixed = auto_mix(songs, metadata, metadata_key="tempo")
    return {"mode": "auto-mix", "sequence": mixed}