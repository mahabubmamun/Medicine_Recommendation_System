# import pandas as pd

# description = pd.read_csv("app\data\description.csv")
# precaution = pd.read_csv("app\data\precautions.csv")
# medication = pd.read_csv("app\data\medications.csv")
# diet = pd.read_csv("app\data\diets.csv")
# workout = pd.read_csv("app\data\workout_df.csv")


from pathlib import Path
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent

DATA_DIR = BASE_DIR / "data"

description = pd.read_csv(DATA_DIR / "description.csv")
precaution = pd.read_csv(DATA_DIR / "precautions_df.csv")
medication = pd.read_csv(DATA_DIR / "medications.csv")
diet = pd.read_csv(DATA_DIR / "diets.csv")
workout = pd.read_csv(DATA_DIR / "workout_df.csv")
# symptoms = pd.read_csv(DATA_DIR / "symtoms_df.csv")