from fastapi import FastAPI
import ast
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from .model import model
from .schemas import Symptoms
from .utils import create_input
from .data_loader import (
    description,
    precaution,
    medication,
    diet,
    workout
)


app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


diseases_list = {15: 'Fungal infection', 4: 'Allergy', 16: 'GERD', 9: 'Chronic cholestasis', 
                 14: 'Drug Reaction', 33: 'Peptic ulcer diseae', 1: 'AIDS', 12: 'Diabetes ', 
                 17: 'Gastroenteritis', 6: 'Bronchial Asthma', 23: 'Hypertension ', 30: 'Migraine', 
                 7: 'Cervical spondylosis', 32: 'Paralysis (brain hemorrhage)', 28: 'Jaundice', 
                 29: 'Malaria', 8: 'Chicken pox', 11: 'Dengue', 37: 'Typhoid', 40: 'hepatitis A', 
                 19: 'Hepatitis B', 20: 'Hepatitis C', 21: 'Hepatitis D', 22: 'Hepatitis E', 
                 3: 'Alcoholic hepatitis', 36: 'Tuberculosis', 10: 'Common Cold', 34: 'Pneumonia', 
                 13: 'Dimorphic hemmorhoids(piles)', 18: 'Heart attack', 39: 'Varicose veins', 
                 26: 'Hypothyroidism', 24: 'Hyperthyroidism', 25: 'Hypoglycemia', 
                 31: 'Osteoarthristis', 5: 'Arthritis', 0: '(vertigo) Paroymsal  Positional Vertigo', 
                 2: 'Acne', 38: 'Urinary tract infection', 35: 'Psoriasis', 27: 'Impetigo'}

# app = FastAPI(
#     title = "Medicne Recommendation System",
#     version = "1.0.0"
# )

@app.get("/")
def home():
    return {
        "message":"Medicine Recommendation System"
    }

@app.post("/predict")
def predict(data : Symptoms):
    X = create_input(data.symptoms)

    prediction = int(model.predict(X)[0])
    disease = diseases_list[prediction]

    # converting into list
    # precaution = list(precaution)

    desc = description[description['Disease'] == disease]
    precaut = precaution.loc[precaution['Disease'] == disease, ["Precaution_1", "Precaution_2", "Precaution_3", "Precaution_4"]]
    medi = medication.loc[medication['Disease'] == disease, "Medication"]
    die = diet.loc[diet['Disease'] == disease, "Diet"]
    work = workout.loc[workout['disease'] == disease, "workout"]

    precaut = precaut.iloc[0].dropna().tolist()
    medi = ast.literal_eval(medi.iloc[0])
    die = ast.literal_eval(die.iloc[0])
    work = work.to_list()


    return {
        "Predicted Disease" : disease,
        "Disease description" : desc,
        "Precautions" : precaut,
        "Medications" : medi,
        "Diet" : die,
        "Workout" : work
    }