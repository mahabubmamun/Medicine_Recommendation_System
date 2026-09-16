// import { useState } from "react";
// import axios from "axios";
// import Result from "./components/Result";

// const symptomList = [
//     'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 
//     'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 
//     'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition',
//     'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 
//     'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 
//     'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 
//     'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 
//     'dehydration', 'indigestion', 'headache', 'yellowish_skin', 
//     'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 
//     'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 
//     'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 
//     'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 
//     'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 
//     'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 
//     'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 
//     'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 
//     'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 
//     'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 
//     'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 
//     'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 
//     'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 
//     'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 
//     'movement_stiffness', 'spinning_movements', 'loss_of_balance', 
//     'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 
//     'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 
//     'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 
//     'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 
//     'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 
//     'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 
//     'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 
//     'lack_of_concentration', 'visual_disturbances', 
//     'receiving_blood_transfusion', 'receiving_unsterile_injections', 
//     'coma', 'stomach_bleeding', 'distention_of_abdomen', 
//     'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum',
//     'prominent_veins_on_calf', 'palpitations', 'painful_walking', 
//     'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 
//     'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 
//     'blister', 'red_sore_around_nose', 'yellow_crust_ooze'
// ]

// function App() {

//   const [symptoms, setSymptoms] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [result, setResult] = useState(null);


//   const predictDisease = async () => {

//     const symptomList = symptoms
//       .split(",")
//       .map(item => item.trim());

//     try {

//       const response = await axios.post(
//         // "http://127.0.0.1:8000/predict",
//         "https://medicine-recommendation-system-4-yfxw.onrender.com/predict",
//         {
//           symptoms: symptomList
//         }
//       );

//       setResult(response.data);

//     } catch (error) {

//       console.log(error);

//     }

//   };


// const handleChange = (e) => {
//   const value = e.target.value;
//   setSymptoms(value);

//   const lastWord = value.split(",").pop().trim().toLowerCase();

//   if (!lastWord) {
//     setSuggestions([]);
//     return;
//   }

//   const filtered = symptomList.filter((symptom) =>
//     symptom.toLowerCase().includes(lastWord)
//   );

//   setSuggestions(filtered);
// };

// const selectSuggestion = (symptom) => {
//   const parts = symptoms.split(",");
//   parts[parts.length - 1] = " " + symptom;

//   setSymptoms(parts.join(",").replace(/^ /, ""));
//   setSuggestions([]);
// };

//   return (

//     <div className="container">

//       <h1>My Care Guide</h1>

//       <div className="textarea-container">
//       <textarea
//         rows="5"
//         placeholder="Enter symptoms separated by commas (e.g., fever, headache, nausea)"
//         value={symptoms}
//         // onChange={(e) => setSymptoms(e.target.value)}
//         onChange = {handleChange}
//       />
//       {/* </div> */}
//             {suggestions.length > 0 && (
//         <ul className="suggestions">
//           {suggestions.map((item, index) => (
//             <li key={index} onClick={() => selectSuggestion(item)}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>

//       <br />
//       <div class = "button-container">
//             <button onClick={predictDisease}>
//               Predict Disease
//             </button>
//       </div>

//       {result && <Result data={result}/>}

//     </div>

//   );

// }

// export default App;


import { useState } from "react";
import axios from "axios";
import Result from "./components/Result";
import "./App.css";

const symptomList = [
  "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing",
  "shivering", "chills", "joint_pain", "stomach_pain", "acidity",
  "ulcers_on_tongue", "muscle_wasting", "vomiting", "burning_micturition",
  "spotting_ urination", "fatigue", "weight_gain", "anxiety",
  "cold_hands_and_feets", "mood_swings", "weight_loss", "restlessness",
  "lethargy", "patches_in_throat", "irregular_sugar_level", "cough",
  "high_fever", "sunken_eyes", "breathlessness", "sweating",
  "dehydration", "indigestion", "headache", "yellowish_skin",
  "dark_urine", "nausea", "loss_of_appetite", "pain_behind_the_eyes",
  "back_pain", "constipation", "abdominal_pain", "diarrhoea",
  "mild_fever", "yellow_urine", "yellowing_of_eyes", "acute_liver_failure",
  "fluid_overload", "swelling_of_stomach", "swelled_lymph_nodes", "malaise",
  "blurred_and_distorted_vision", "phlegm", "throat_irritation",
  "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion",
  "chest_pain", "weakness_in_limbs", "fast_heart_rate",
  "pain_during_bowel_movements", "pain_in_anal_region", "bloody_stool",
  "irritation_in_anus", "neck_pain", "dizziness", "cramps",
  "bruising", "obesity", "swollen_legs", "swollen_blood_vessels",
  "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails",
  "swollen_extremeties", "excessive_hunger", "extra_marital_contacts",
  "drying_and_tingling_lips", "slurred_speech", "knee_pain",
  "hip_joint_pain", "muscle_weakness", "stiff_neck", "swelling_joints",
  "movement_stiffness", "spinning_movements", "loss_of_balance",
  "unsteadiness", "weakness_of_one_body_side", "loss_of_smell",
  "bladder_discomfort", "foul_smell_of urine", "continuous_feel_of_urine",
  "passage_of_gases", "internal_itching", "toxic_look_(typhos)",
  "depression", "irritability", "muscle_pain", "altered_sensorium",
  "red_spots_over_body", "belly_pain", "abnormal_menstruation",
  "dischromic _patches", "watering_from_eyes", "increased_appetite",
  "polyuria", "family_history", "mucoid_sputum", "rusty_sputum",
  "lack_of_concentration", "visual_disturbances",
  "receiving_blood_transfusion", "receiving_unsterile_injections",
  "coma", "stomach_bleeding", "distention_of_abdomen",
  "history_of_alcohol_consumption", "fluid_overload.1", "blood_in_sputum",
  "prominent_veins_on_calf", "palpitations", "painful_walking",
  "pus_filled_pimples", "blackheads", "scurring", "skin_peeling",
  "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails",
  "blister", "red_sore_around_nose", "yellow_crust_ooze"
];

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const predictDisease = async () => {
    const symptomArray = symptoms
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    if (symptomArray.length === 0) {
      alert("Please enter at least one symptom.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post(
        "https://medicine-recommendation-system-4-yfxw.onrender.com/predict",
        {
          symptoms: symptomArray,
        }
      );

      setResult(response.data);

      setTimeout(() => {
        document
          .getElementById("result-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);

    } catch (error) {
      console.error(error);
      alert("Unable to connect to the prediction server.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSymptoms(value);

    const lastWord = value.split(",").pop().trim().toLowerCase();

    if (!lastWord) {
      setSuggestions([]);
      return;
    }

    const filtered = symptomList
      .filter((symptom) =>
        symptom.toLowerCase().includes(lastWord)
      )
      .slice(0, 8);

    setSuggestions(filtered);
  };

  const selectSuggestion = (symptom) => {
    const parts = symptoms.split(",");

    parts[parts.length - 1] = ` ${symptom}`;

    setSymptoms(parts.join(",").trim());
    setSuggestions([]);
  };

  const clearSymptoms = () => {
    setSymptoms("");
    setSuggestions([]);
    setResult(null);
  };

  const getSymptomCount = () => {
    return symptoms
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean).length;
  };

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">✚</div>
          <span>My Care Guide</span>
        </div>

        <div className="nav-badge">
          AI Powered
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            ✨ Intelligent Health Assistant
          </div>

          <h1>
            Understand Your
            <span> Symptoms Better</span>
          </h1>

          <p>
            Enter your symptoms and get an AI-powered prediction
            with helpful health information, precautions, diet and
            lifestyle suggestions.
          </p>

        </div>

        <div className="hero-decoration">
          <div className="floating-card card-one">
            🩺
          </div>

          <div className="floating-card card-two">
            ❤️
          </div>

          <div className="floating-card card-three">
            🧬
          </div>
        </div>

      </section>

      {/* Main */}
      <main className="main-container">

        {/* Input Card */}
        <section className="input-card">

          <div className="section-header">

            <div>
              <div className="section-icon">🔍</div>
              <div>
                <h2>Check Your Symptoms</h2>
                <p>
                  Enter one or more symptoms separated by commas
                </p>
              </div>
            </div>

            {getSymptomCount() > 0 && (
              <span className="symptom-counter">
                {getSymptomCount()} symptom
                {getSymptomCount() !== 1 ? "s" : ""}
              </span>
            )}

          </div>

          <div className="input-wrapper">

            <textarea
              rows="5"
              placeholder="Example: fever, headache, nausea..."
              value={symptoms}
              onChange={handleChange}
            />

            {symptoms && (
              <button
                className="clear-button"
                onClick={clearSymptoms}
                type="button"
              >
                ×
              </button>
            )}

            {suggestions.length > 0 && (
              <div className="suggestions">

                <div className="suggestion-title">
                  Suggested symptoms
                </div>

                {suggestions.map((item, index) => (
                  <button
                    key={index}
                    className="suggestion-item"
                    onClick={() => selectSuggestion(item)}
                    type="button"
                  >
                    <span>＋</span>
                    {item.replaceAll("_", " ")}
                  </button>
                ))}

              </div>
            )}

          </div>

          <div className="input-footer">

            <span>
              💡 Tip: Add more relevant symptoms for better input
              coverage.
            </span>

            <button
              className="predict-button"
              onClick={predictDisease}
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="spinner"></span>
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze Symptoms
                  <span>→</span>
                </>
              )}

            </button>

          </div>

        </section>

        {/* How it works */}
        {!result && !loading && (
          <section className="how-section">

            <h2>How It Works</h2>

            <p className="how-subtitle">
              Get useful health information in three simple steps.
            </p>

            <div className="steps">

              <div className="step">
                <div className="step-number">01</div>
                <div className="step-icon">📝</div>
                <h3>Enter Symptoms</h3>
                <p>
                  Describe the symptoms you are experiencing.
                </p>
              </div>

              <div className="step">
                <div className="step-number">02</div>
                <div className="step-icon">🤖</div>
                <h3>AI Analysis</h3>
                <p>
                  Our machine learning model analyzes your input.
                </p>
              </div>

              <div className="step">
                <div className="step-number">03</div>
                <div className="step-icon">💚</div>
                <h3>Get Information</h3>
                <p>
                  Explore the predicted disease and health guidance.
                </p>
              </div>

            </div>

          </section>
        )}

        {/* Loading */}
        {loading && (
          <div className="loading-card">
            <div className="big-spinner"></div>
            <h3>Analyzing your symptoms...</h3>
            <p>
              Please wait while the AI model processes your information.
            </p>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <section id="result-section">
            <Result data={result} />
          </section>
        )}

        {/* Disclaimer */}
        <div className="disclaimer">
          <span>⚠️</span>
          <div>
            <strong>Important:</strong> This application provides
            AI-generated health information for educational purposes
            only. It is not a substitute for professional medical
            diagnosis or treatment.
          </div>
        </div>

      </main>

      <footer>
        <div>My Care Guide</div>
        <span>AI-powered health information system</span>
      </footer>

    </div>
  );
}

export default App;
