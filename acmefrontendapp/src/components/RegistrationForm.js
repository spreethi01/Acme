import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import './RegistrationForm.css'; // Import the CSS file

export default function RegistrationForm() {
  const { eventId } = useParams(); // Extract eventId from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    rollnumber: "",
    year: "",
    section: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      const response = await axios.post(`http://localhost:5000/Events/${eventId}/Register`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Registration successful!");
        // Optionally redirect or perform other actions after successful registration
        navigate("/register");
      } else {
        const errorData = response.data;
        alert(`Registration failed: ${errorData.msg}`);
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Error registering. Please try again later.");
    }
  };

  return (
    <div className="registration-form-container">
      <h2 className="registration-form-title">Register for Event</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Roll Number:
          <input
            type="text"
            name="rollnumber"
            value={formData.rollnumber}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Year:
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Section:
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <button type="submit" className="form-submit-button">Register</button>
      </form>
    </div>
  );
}
