import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Result({ data }) {

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text("Medicine Prescription", 20, 20);

    doc.setFontSize(12);

    doc.text(`Disease: ${data["Predicted Disease"]}`, 20, 35);

    doc.text(
      `Description: ${data["Disease description"].Description["0"]}`,
      20,
      45
    );

    autoTable(doc, {
      startY:60,
      head:[["Category","Details"]],
      body:[
        ["Precautions", data.Precautions.join(", ")],
        ["Medications", data.Medications.join(", ")],
        ["Diet", data.Diet.join(", ")],
        ["Workout", data.Workout.join(", ")]
      ]
    });

    doc.save("Prescription.pdf");

  };

  return (

    <div className="result-card">
        <h2>Disease</h2>
        <p>{data["Predicted Disease"]}</p>

        <h2>Description</h2>
        <p>{data["Disease description"].Description["0"]}</p>

        <h2>Precautions</h2>
        <ul>
          {data.Precautions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Medications</h2>
        <ul>
          {data.Medications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Diet</h2>
        <ul>
          {data.Diet.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Workout</h2>
        <ul>
          {data.Workout.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>


      <button onClick={downloadPDF}>
        Print Prescription
      </button>

    </div>

  );

}

export default Result;