from src.shuffle import true_shuffle

def test_no_loss_or_duplicates():
    songs = ["A", "B", "C", "D"]
    shuffled = true_shuffle(songs.copy())
    assert sorted(shuffled) == sorted(songs)

def test_randomness_over_runs():
    songs = ["A", "B", "C", "D"]
    runs = [true_shuffle(songs.copy()) for _ in range(5)]
    assert len(set(tuple(r) for r in runs)) > 1  # expect at least some variation