import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import image from "../assets/homeBackground/college students-cuate.png";
import './Registration.css'; // Import the CSS file

export default function Registration() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetchEventsNotCompleted();
  }, []);

  const fetchEventsNotCompleted = async () => {
    try {
      const response = await fetch("http://localhost:5000/Events");
      if (response.ok) {
        const data = await response.json();
        const currentDate = new Date();
        const filteredEvents = data.filter(
          (event) => !event.completed && new Date(event.date) > currentDate
        );
        setUpcomingEvents(filteredEvents);
      } else {
        console.error("Failed to fetch events:", response.status);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div className="registration-container">
      <h1 className="registration-title">Latest Events</h1>
      <div className="register-events-container">
        {upcomingEvents.map((event) => (
          <Link key={event._id} to={`/registration/${event._id}`} className="event-link">
            <Card
              image={image}
              title={event.title}
              subOrganization={event.sub_org}
              description={event.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
