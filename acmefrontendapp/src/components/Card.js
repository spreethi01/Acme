import React from 'react';
import './Card.css';
import sport from "../assets/events/1.png";
import communication from"../assets/events/2.png";
import tech from "../assets/events/3.png";
import charity from "../assets/events/4.png";

export default function Card({ image, title, subOrganization, description }) {
  let arr=[sport,communication,tech,charity];
  let n=0;
  if(subOrganization=='Sportio'){
    n=0;
  }
  else if(subOrganization=='Techno Crats'){
    n=1;
  }
  else if(subOrganization=='Communion'){
    n=2;
  }
  else{
    n=3;
  }

  image=n+".png";

  return (
    <div className="card-container">
      <img src={arr[n]} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-sub-org">{subOrganization}</h4>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
