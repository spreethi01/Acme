import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Participants.css';  // Make sure to create a CSS file for styling

function Participants() {
  const [events, setEvents] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchParticipants = async (eventId) => {
    try {
      const response = await axios.get(`http://localhost:5000/Participants?eventId=${eventId}`);
      setParticipants(response.data);
      setSelectedEventId(eventId);
    } catch (error) {
      console.error('Error fetching participants:', error);
    }
  };

  return (
    <div className="participants-page">
      <h1>Participants Page</h1>
      <div className="events-list">
        {events.map((event) => (
          <div key={event._id} className="event-card" onClick={() => fetchParticipants(event._id)}>
            <h3>{event.title}</h3>
            <p>{event.sub_org}</p>
            <p>{event.discription}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      {selectedEventId && (
        <div className="participants-list">
          <h2>Participants</h2>
          <ul>
            {participants.map((participant) => (
              <li key={participant._id}>
                <p>{participant.username}</p>
                <p>{participant.rollnumber}</p>
                <p>{participant.year}</p>
                <p>{participant.section}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Participants;
