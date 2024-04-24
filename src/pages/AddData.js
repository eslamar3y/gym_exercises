import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AddData = () => {
  const { id } = useParams(); // Get the device ID from the URL
  const [deviceId, setDeviceId] = useState(id);
  const [heartRateValue, setHeartRateValue] = useState(0);
  const [heartRateDateTime, setHeartRateDateTime] = useState("");
  const [stepCountValue, setStepCountValue] = useState(0);
  const [stepCountDateTime, setStepCountDateTime] = useState("");
  const [maxHeartRate, setMaxHeartRate] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 16); // Get current date and time in ISO format
    setHeartRateDateTime(currentDate);
    setStepCountDateTime(currentDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      deviceId,
      heartRates: [{ value: heartRateValue, dateTime: heartRateDateTime }],
      stepCounts: [{ value: stepCountValue, dateTime: stepCountDateTime }],
      maxHeartRate,
    };

    fetch("http://localhost:5000/ClientGateway/Biometrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setSuccessMessage("Data added successfully!");

        // document.getElementById("message").style.textAlign = "center";
        // document.getElementById("message").style.color = "#189018";
        // document.getElementById("message").style.paddingBottom = "10px";
      })
      .catch((error) => {
        // setSuccessMessage("Failed to add data.");
        // document.getElementById("message").style.textAlign = "center";
        // document.getElementById("message").style.color = "#ff4949";
        // document.getElementById("message").style.paddingBottom = "10px";
      });
  };

  return (
    <div style={{ maxWidth: "600px", margin: " 50px auto" }}>
      {successMessage && (
        <p
          id="message"
          style={{
            textAlign: "center",
            color: "#189018",
            paddingBottom: "10px",
          }}
        >
          {successMessage}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "10px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <label htmlFor="deviceId">Device ID:</label>
        <input
          type="text"
          id="deviceId"
          value={deviceId}
          onChange={(e) => setDeviceId(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="heartRateValue">Heart Rate Value:</label>
        <input
          type="number"
          id="heartRateValue"
          value={heartRateValue}
          onChange={(e) => setHeartRateValue(Number(e.target.value))}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="heartRateDateTime">Heart Rate Date/Time:</label>
        <input
          type="datetime-local"
          id="heartRateDateTime"
          value={heartRateDateTime}
          onChange={(e) => setHeartRateDateTime(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="stepCountValue">Step Count Value:</label>
        <input
          type="number"
          id="stepCountValue"
          value={stepCountValue}
          onChange={(e) => setStepCountValue(Number(e.target.value))}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="stepCountDateTime">Step Count Date/Time:</label>
        <input
          type="datetime-local"
          id="stepCountDateTime"
          value={stepCountDateTime}
          onChange={(e) => setStepCountDateTime(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="maxHeartRate">Max Heart Rate:</label>
        <input
          type="number"
          id="maxHeartRate"
          value={maxHeartRate}
          onChange={(e) => setMaxHeartRate(Number(e.target.value))}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddData;
