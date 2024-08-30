import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Events.css'; // Import CSS file for styling

function Events() {
  const [latestEvents, setLatestEvents] = useState([]);

  useEffect(() => {
    fetchLatestEvents();
  }, []);

  const fetchLatestEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Events/latest/5');
      setLatestEvents(response.data);
    } catch (error) {
      console.error('Failed to fetch latest events:', error);
    }
  };

  return (
    <div class="section">
    <div class="background">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="gradient-overlay"></div>
    </div>
    <div className="events-container content">
      <h1 className="events-title">Latest Events</h1>

      <div className="events-list">
        {latestEvents.map((event) => (
          <Card
            key={event._id}
            image={event.image}
            title={event.title}
            subOrganization={event.sub_org}
            description={event.description}
          />
        ))}
      </div>

      <div className="register-button-container">
        <a className="register-button" href="/register">
          Register for Events
        </a>
      </div>
    </div>
    </div>
  );
}

export default Events;
