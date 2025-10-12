from fastapi import APIRouter
from src.shuffle import true_shuffle

router = APIRouter()

# Sample track list to test
tracks = [
    {"title": "Midnight City", "artist": "M83"},
    {"title": "The Less I Know The Better", "artist": "Tame Impala"},
    {"title": "Electric Feel", "artist": "MGMT"},
    {"title": "Dreams", "artist": "Fleetwood Mac"},
    {"title": "Breathe Deeper", "artist": "Tame Impala"},
]

@router.get("/")
def shuffle_tracks():
    """
    Returns a freshly shuffled list of tracks.
    """
    shuffled = true_shuffle(tracks)
    return {"mode": "true_shuffle", "count": len(shuffled), "playlist": shuffled}