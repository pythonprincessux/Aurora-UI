import random
import time


def true_shuffle(items):
    """
    Randomly shuffles a list of items (tracks).
    Returns a new shuffled list each run.
    """
    shuffled = items.copy()
    random.shuffle(shuffled)
    return shuffled


def auto_mix(items, metadata, metadata_key="tempo"):
    """
    Groups or sorts tracks by a metadata key (e.g., tempo, mood, difficulty).
    """
    try:
        return sorted(items, key=lambda x: metadata[x][metadata_key])
    except KeyError:
        print(f"⚠️ Missing metadata key '{metadata_key}' for one or more items.")
        return items


def energy_visualizer(value, scale=10, animate=False):
    """
    Turns a numeric value (like tempo) into a colored energy bar.
    Lower = calm (blue), higher = hype (red).
    """
    try:
        level = int(value / scale)
    except (TypeError, ValueError):
        return "░" * 5  # fallback if missing or invalid

    level = max(1, min(level, 10))

    # Color selection
    if level < 4:
        color = "\033[38;5;39m"   # bright blue (chill)
    elif level < 7:
        color = "\033[38;5;226m"  # bright yellow (mid)
    else:
        color = "\033[38;5;196m"  # bright red (high)

    reset = "\033[0m"
    bars = "█" * level

    if animate:
        for i in range(1, level + 1):
            print(f"{color}{'█' * i}{reset}", end="\r", flush=True)
            time.sleep(0.05)
        print(" " * 20, end="\r")

    return f"{color}{bars}{reset}"


# --- test run (optional) ---
if __name__ == "__main__":
    for tempo in [80, 110, 150]:
        print(f"{tempo} BPM → {energy_visualizer(tempo)}")