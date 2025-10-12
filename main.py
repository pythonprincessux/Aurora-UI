from src.shuffle import true_shuffle, auto_mix, energy_visualizer

def main():
    songs = ["Track A", "Track B", "Track C", "Track D"]
    metadata = {
        "Track A": {"tempo": 120, "mood": "chill"},
        "Track B": {"tempo": 90, "mood": "sad"},
        "Track C": {"tempo": 140, "mood": "hype"},
        "Track D": {"tempo": 110, "mood": "neutral"},
    }

    print("Aurora Mode Selector 🎛")
    mode = input("Choose mode (shuffle/mix-tempo/mix-mood): ").strip().lower()

    if mode == "mix-tempo":
        print("\nAuto Mix Mode 🎚 — sequencing by tempo\n")
        mixed = auto_mix(songs.copy(), metadata, metadata_key="tempo")
        for i, song in enumerate(mixed, 1):
            print(f"{i}. {song} ({metadata[song]['tempo']} BPM)")
            energy_visualizer(metadata[song]['tempo'], animate=True)

    elif mode == "mix-mood":
        print("\nAuto Mix Mode 💫 — sequencing by mood\n")
        mixed = auto_mix(songs.copy(), metadata, metadata_key="mood")
        for i, song in enumerate(mixed, 1):
            print(f"{i}. {song} ({metadata[song]['mood']})")

    else:
        print("\nTrue Shuffle Mode 🎲 — pure randomness\n")
        shuffled = true_shuffle(songs.copy())
        for i, song in enumerate(shuffled, 1):
            print(f"{i}. {song}")

if __name__ == "__main__":
    main()