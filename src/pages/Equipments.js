import React from "react";
// import { useHistory } from "react-router-dom";

const equipmentData = {
  assisted: {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    imageUrl: "https://via.placeholder.com/150?text=assisted",
    title: "Assisted",
    text: "Add data tracked when doing Assisted exercises.",
  },
  band: {
    id: "7b932bc2-b2f7-4e26-a1d0-28e79b63c123",
    imageUrl: "https://via.placeholder.com/150?text=band",
    title: "Band",
    text: "Add data tracked when using Bands.",
  },
  barbell: {
    id: "c01fc4bb-7d26-4e3f-bba9-154d3c42c5a4",
    imageUrl: "https://via.placeholder.com/150?text=barbell",
    title: "Barbell",
    text: "Add data tracked when using Barbell.",
  },
  bodyweight: {
    id: "9f1b3c0a-4024-4872-b9cf-6524c4d14f97",
    imageUrl: "https://via.placeholder.com/150?text=bodyweight",
    title: "Body Weight",
    text: "Add data tracked when doing Body Weight exercises.",
  },
  bosuBall: {
    id: "a80c6de5-02f0-4312-8f2e-7c2e9aeb9515",
    imageUrl: "https://via.placeholder.com/150?text=bosuBall",
    title: "Bosu Ball",
    text: "Add data tracked when using Bosu Ball.",
  },
  cable: {
    id: "2eb4f4d8-54bb-4f9f-bf61-55f249a5c9ed",
    imageUrl: "https://via.placeholder.com/150?text=cable",
    title: "Cable",
    text: "Add data tracked when using Cable machines.",
  },
  dumbbell: {
    id: "8039168a-c750-4344-9160-b2e00124b7fb",
    imageUrl: "https://via.placeholder.com/150?text=dumbbell",
    title: "Dumbbell",
    text: "Add data tracked when using Dumbbells.",
  },
  ellipticalMachine: {
    id: "e994b861-4e38-43d5-8165-2d0d7d2a8e91",
    imageUrl: "https://via.placeholder.com/150?text=ellipticalMachine",
    title: "Elliptical Machine",
    text: "Add data tracked when using Elliptical Machines.",
  },
  ezBarbell: {
    id: "172e27c5-4321-4a6f-b19c-045db5e88a8a",
    imageUrl: "https://via.placeholder.com/150?text=ezBarbell",
    title: "EZ Barbell",
    text: "Add data tracked when using EZ Barbell.",
  },
  hammer: {
    id: "d6bc3f06-1c7b-46ee-b536-8549c2f64d9e",
    imageUrl: "https://via.placeholder.com/150?text=hammer",
    title: "Hammer",
    text: "Add data tracked when using Hammer machines.",
  },
  kettlebell: {
    id: "e7b4b2a4-3f9d-4b3e-8e7f-0b3d7a3b4e4e",
    imageUrl: "https://via.placeholder.com/150?text=kettlebell",
    title: "Kettlebell",
    text: "Add data tracked when using Kettlebells.",
  },
  landmine: {
    id: "e7b4b2a4-3f9d-4b3e-8e7f-0b3d7a3b4e4e",
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
    backgroundColor: "#007bff",
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
    e.target.style.backgroundColor = "#0056b3";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#007bff";
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

  return (
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
  );
};

export default Equipments;
