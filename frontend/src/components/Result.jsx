import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./Result.css";

function Result({ data }) {

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("My Care Guide - Health Report", 20, 20);

    doc.setFontSize(12);

    doc.text(
      `Predicted Disease: ${data["Predicted Disease"]}`,
      20,
      35
    );

    doc.text(
      `Description: ${data["Disease description"].Description["0"]}`,
      20,
      47,
      {
        maxWidth: 170
      }
    );

    autoTable(doc, {
      startY: 65,

      head: [
        ["Category", "Details"]
      ],

      body: [
        [
          "Precautions",
          data.Precautions.join(", ")
        ],
        [
          "Medications",
          data.Medications.join(", ")
        ],
        [
          "Diet",
          data.Diet.join(", ")
        ],
        [
          "Workout",
          data.Workout.join(", ")
        ]
      ],

      styles: {
        fontSize: 10,
        cellPadding: 6
      },

      headStyles: {
        fillColor: [13, 110, 253]
      }
    });

    doc.save("My-Care-Guide-Report.pdf");
  };

  const formatText = (text) => {
    return text?.replaceAll("_", " ");
  };

  return (

    <div className="result-container">

      {/* Result Header */}

      <div className="result-header">

        <div>

          <span className="result-label">
            AI ANALYSIS COMPLETE
          </span>

          <h2>Your Health Summary</h2>

          <p>
            Based on the symptoms you provided, the model identified
            the following result.
          </p>

        </div>

        <div className="result-check">
          ✓
        </div>

      </div>


      {/* Disease */}

      <div className="disease-card">

        <div className="disease-icon">
          🩺
        </div>

        <div>

          <span>Predicted Condition</span>

          <h1>
            {formatText(data["Predicted Disease"])}
          </h1>

        </div>

      </div>


      {/* Description */}

      <div className="result-section">

        <div className="result-section-title">
          <span className="section-number">01</span>

          <div>
            <h3>About This Condition</h3>
            <p>General information about the prediction</p>
          </div>
        </div>

        <div className="description-box">
          {data["Disease description"].Description["0"]}
        </div>

      </div>


      {/* Information Grid */}

      <div className="info-grid">

        {/* Precautions */}

        <div className="info-card">

          <div className="info-card-header">
            <div className="info-icon precaution-icon">
              🛡️
            </div>

            <div>
              <h3>Precautions</h3>
              <span>Things to keep in mind</span>
            </div>
          </div>

          <ul>
            {data.Precautions.map((item, index) => (
              <li key={index}>
                <span>✓</span>
                {formatText(item)}
              </li>
            ))}
          </ul>

        </div>


        {/* Medications */}

        <div className="info-card">

          <div className="info-card-header">
            <div className="info-icon medicine-icon">
              💊
            </div>

            <div>
              <h3>Medications</h3>
              <span>Model-provided information</span>
            </div>
          </div>

          <ul>
            {data.Medications.map((item, index) => (
              <li key={index}>
                <span>✓</span>
                {formatText(item)}
              </li>
            ))}
          </ul>

        </div>


        {/* Diet */}

        <div className="info-card">

          <div className="info-card-header">
            <div className="info-icon diet-icon">
              🥗
            </div>

            <div>
              <h3>Diet</h3>
              <span>Suggested dietary information</span>
            </div>
          </div>

          <ul>
            {data.Diet.map((item, index) => (
              <li key={index}>
                <span>✓</span>
                {formatText(item)}
              </li>
            ))}
          </ul>

        </div>


        {/* Workout */}

        <div className="info-card">

          <div className="info-card-header">
            <div className="info-icon workout-icon">
              🏃
            </div>

            <div>
              <h3>Activity</h3>
              <span>Suggested physical activities</span>
            </div>
          </div>

          <ul>
            {data.Workout.map((item, index) => (
              <li key={index}>
                <span>✓</span>
                {formatText(item)}
              </li>
            ))}
          </ul>

        </div>

      </div>


      {/* PDF */}

      <div className="report-footer">

        <div>
          <strong>Want to keep this report?</strong>

          <span>
            Generate a PDF copy of your health information.
          </span>
        </div>

        <button
          className="pdf-button"
          onClick={downloadPDF}
        >
          <span>📄</span>
          Download Report
        </button>

      </div>

    </div>
  );
}

export default Result;