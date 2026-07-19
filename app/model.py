import pickle

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "svc_med_pred.pkl"

with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)


