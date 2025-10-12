from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_catalog():
    catalog = [
        {"id": 1, "title": "Track A", "mood": "chill", "tempo": 120},
        {"id": 2, "title": "Track B", "mood": "sad", "tempo": 90},
        {"id": 3, "title": "Track C", "mood": "hype", "tempo": 140},
        {"id": 4, "title": "Track D", "mood": "neutral", "tempo": 110},
    ]
    return {"catalog": catalog}