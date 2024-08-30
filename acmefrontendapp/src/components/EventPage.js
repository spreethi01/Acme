import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventPage.css';  // Import the CSS file

function EventPage() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: '', sub_org: '', description: '', date: '', completed: false });

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

  const handleCreateEvent = async () => {
    try {
      await axios.post('http://localhost:5000/admin/addEvents', newEvent, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      fetchEvents();
      setNewEvent({ title: '', sub_org: '', description: '', date: '', completed: false });
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const handleUpdateEvent = async () => {
    try {
      await axios.put(`http://localhost:5000/admin/events/${selectedEvent._id}`, selectedEvent, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      fetchEvents();
      setSelectedEvent(null);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:5000/admin/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleCompleteEvent = async (eventId) => {
    try {
      await axios.put(`http://localhost:5000/admin/events/${eventId}/complete`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      fetchEvents();
    } catch (error) {
      console.error('Error marking event as completed:', error);
    }
  };

  return (

    <div className="event-page">
      <div className="event-page__events-list">
        <h2 className="event-page__section-title">Events List</h2>
        <ul className="event-page__list">
          {events.map((event) => (
            <li className="event-page__list-item" key={event._id}>
              <div className="event-page__event-info">
                <h3 className="event-page__event-title">{event.title}</h3>
                <p className="event-page__event-sub-org">{event.sub_org}</p>
                <p className="event-page__event-description">{event.description}</p>
                <p className="event-page__event-date">{new Date(event.date).toLocaleDateString()}</p>
                <p className={`event-page__event-status ${event.completed ? 'completed' : 'not-completed'}`}>
                  {event.completed ? 'Completed' : 'Not Completed'}
                </p>
              </div>
              <div className="event-page__event-actions">
                <button className="event-page__button" onClick={() => setSelectedEvent(event)}>Edit</button>
                <button className="event-page__button" onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                {!event.completed && (
                  <button className="event-page__button" onClick={() => handleCompleteEvent(event._id)}>Mark as Completed</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="event-page__form">
        <div className="event-page__add-event">
          <h2 className="event-page__section-title">Add New Event</h2>
          <input
            className="event-page__input"
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <input
            className="event-page__input"
            type="text"
            placeholder="Sub Organization"
            value={newEvent.sub_org}
            onChange={(e) => setNewEvent({ ...newEvent, sub_org: e.target.value })}
          />
          <input
            className="event-page__input"
            type="text"
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          />
          <input
            className="event-page__input"
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <button className="event-page__button" onClick={handleCreateEvent}>Create Event</button>
        </div>
        
        {selectedEvent && (
          <div className="event-page__edit-event">
            <h2 className="event-page__section-title">Edit Event</h2>
            <input
              className="event-page__input"
              type="text"
              placeholder="Title"
              value={selectedEvent.title}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, title: e.target.value })}
            />
            <input
              className="event-page__input"
              type="text"
              placeholder="Sub Organization"
              value={selectedEvent.sub_org}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, sub_org: e.target.value })}
            />
            <input
              className="event-page__input"
              type="text"
              placeholder="Description"
              value={selectedEvent.description}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, description: e.target.value })}
            />
            <input
              className="event-page__input"
              type="date"
              value={new Date(selectedEvent.date).toISOString().split('T')[0]}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, date: e.target.value })}
            />
            <button className="event-page__button" onClick={handleUpdateEvent}>Update Event</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventPage;
