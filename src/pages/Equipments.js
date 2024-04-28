import React, { useEffect, useState } from "react";
import SimpleBarChart from "../components/SimpleBarChart";
// import { useHistory } from "react-router-dom";

const equipmentData = {
  "3fa85f64-5717-4562-b3fc-2c963f66afa6": {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    imageUrl: "https://via.placeholder.com/150?text=assisted",
    title: "Assisted",
    text: "Add data tracked when doing Assisted exercises.",
  },
  "7b932bc2-b2f7-4e26-a1d0-28e79b63c123": {
    id: "7b932bc2-b2f7-4e26-a1d0-28e79b63c123",
    imageUrl: "https://via.placeholder.com/150?text=band",
    title: "Band",
    text: "Add data tracked when using Bands.",
  },
  "c01fc4bb-7d26-4e3f-bba9-154d3c42c5a4": {
    id: "c01fc4bb-7d26-4e3f-bba9-154d3c42c5a4",
    imageUrl: "https://via.placeholder.com/150?text=barbell",
    title: "Barbell",
    text: "Add data tracked when using Barbell.",
  },
  "9f1b3c0a-4024-4872-b9cf-6524c4d14f97": {
    id: "9f1b3c0a-4024-4872-b9cf-6524c4d14f97",
    imageUrl: "https://via.placeholder.com/150?text=bodyweight",
    title: "Body Weight",
    text: "Add data tracked when doing Body Weight exercises.",
  },
  "a80c6de5-02f0-4312-8f2e-7c2e9aeb9515": {
    id: "a80c6de5-02f0-4312-8f2e-7c2e9aeb9515",
    imageUrl: "https://via.placeholder.com/150?text=bosuBall",
    title: "Bosu Ball",
    text: "Add data tracked when using Bosu Ball.",
  },
  "2eb4f4d8-54bb-4f9f-bf61-55f249a5c9ed": {
    id: "2eb4f4d8-54bb-4f9f-bf61-55f249a5c9ed",
    imageUrl: "https://via.placeholder.com/150?text=cable",
    title: "Cable",
    text: "Add data tracked when using Cable machines.",
  },
  "8039168a-c750-4344-9160-b2e00124b7fb": {
    id: "8039168a-c750-4344-9160-b2e00124b7fb",
    imageUrl: "https://via.placeholder.com/150?text=dumbbell",
    title: "Dumbbell",
    text: "Add data tracked when using Dumbbells.",
  },
  "e994b861-4e38-43d5-8165-2d0d7d2a8e91": {
    id: "e994b861-4e38-43d5-8165-2d0d7d2a8e91",
    imageUrl: "https://via.placeholder.com/150?text=ellipticalMachine",
    title: "Elliptical Machine",
    text: "Add data tracked when using Elliptical Machines.",
  },
  "172e27c5-4321-4a6f-b19c-045db5e88a8a": {
    id: "172e27c5-4321-4a6f-b19c-045db5e88a8a",
    imageUrl: "https://via.placeholder.com/150?text=ezBarbell",
    title: "EZ Barbell",
    text: "Add data tracked when using EZ Barbell.",
  },
  "d6bc3f06-1c7b-46ee-b536-8549c2f64d9e": {
    id: "d6bc3f06-1c7b-46ee-b536-8549c2f64d9e",
    imageUrl: "https://via.placeholder.com/150?text=hammer",
    title: "Hammer",
    text: "Add data tracked when using Hammer machines.",
  },
  "e7b4b2a4-3f9d-4b3e-8e7f-0b3d7a3b4e4e": {
    id: "e7b4b2a4-3f9d-4b3e-8e7f-0b3d7a3b4e4e",
    imageUrl: "https://via.placeholder.com/150?text=kettlebell",
    title: "Kettlebell",
    text: "Add data tracked when using Kettlebells.",
  },
  "0cc0af42-9fa3-4ba5-841b-7d509fc0dc9b": {
    id: "0cc0af42-9fa3-4ba5-841b-7d509fc0dc9b",
    imageUrl: "https://via.placeholder.com/150?text=landmine",
    title: "Landmine",
    text: "Add data tracked when using Landmine.",
  },
};

const Card = ({ id, imageUrl, title, text }) => {
  const cardStyle = {
    width: "300px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  };

  const imgStyle = {
    width: "100%",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  };

  const contentStyle = {
    padding: "20px",
  };

  const titleStyle = {
    marginBottom: "10px",
    fontSize: "1.5rem",
  };

  const textStyle = {
    marginBottom: "20px",
    color: "#555",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#f03131",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  // const history = useHistory();

  const handleAddData = () => {
    // WindowSharp.(`/add-data/${id}`);
    window.location.href = `/add-data/${id}`;
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#c62828";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#f03131";
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt="Placeholder" style={imgStyle} />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={textStyle}>{text}</p>
        <button
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleAddData}
        >
          Add data
        </button>
      </div>
    </div>
  );
};

const Equipments = () => {
  const appContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100vh",
    flexWrap: "wrap",
    marginTop: "40px",
    // backgroundColor: "#f2f2f2",
  };

  const [dataFromBackend, setdataFromBackend] = useState({});

  useEffect(() => {
    fetch("https://localhost:7012/api/heart-rate/consumed-messages/count")
      .then((response) => response.json())
      .then((data) => {
        setdataFromBackend(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
      });
  });

  return (
    <>
      <div className="chart">
        <div>
          <SimpleBarChart
            data={dataFromBackend}
            equipmentData={equipmentData}
          />
        </div>
      </div>
      <div style={appContainerStyle}>
        {Object.values(equipmentData).map((equipment) => (
          <Card
            key={equipment.id}
            id={equipment.id}
            imageUrl={equipment.imageUrl}
            title={equipment.title}
            text={equipment.text}
          />
        ))}
      </div>
    </>
  );
};

export default Equipments;
