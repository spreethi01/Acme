import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Customize.css';

function Customize() {
  const navigate = useNavigate();

  return (
    <div className="customize-container">
      <h1 className="customize-title">Customize Page</h1>
      <div className="customize-card" onClick={() => navigate('/admin/events')}>
        <h2>Events</h2>
        <p>Click to view events.</p>
      </div>
      <div className="customize-card" onClick={() => navigate('/admin/participants')}>
        <h2>Participants</h2>
        <p>Click to view participants.</p>
      </div>
      <div className="customize-card" onClick={() => navigate('/admin/winners')}>
        <h2>Winners</h2>
        <p>Click to view winners.</p>
      </div>
    </div>
  );
}

export default Customize;
