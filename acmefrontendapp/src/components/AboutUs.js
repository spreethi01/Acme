import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1 className='About_h1'>About ACME</h1>
      <p className="intro">
        ACME is a dynamic technical and cultural society exclusively for
        Electronics and Communication Engineering (ECE) students. Operating
        under the expert guidance of the Head of the ECE Department, ACME is
        entirely student-run and managed. This society fosters a vibrant
        community where students can hone their technical skills, engage in
        cultural activities, and develop leadership qualities. Through a diverse
        range of events, workshops, and competitions, ACME aims to enrich the
        educational experience, promote innovation, and cultivate a sense of
        camaraderie among ECE students. At ACME, we are dedicated to empowering
        future engineers and creating a collaborative environment that bridges
        the gap between academia and industry.
      </p>

      <h2 className='About_h2'>Our Clubs</h2>
      <div className="club-cards">
        <div className="club-card">
          <h3>Sportio</h3>
          <p>Dedicated to fun and engaging game-related events, Sportio encourages students to participate in various sports and recreational activities, promoting physical fitness and team spirit.</p>
        </div>
        <div className="club-card">
          <h3>Communion</h3>
          <p>Focusing on communication-related events, Communion provides a platform for students to enhance their interpersonal and professional communication skills through debates, public speaking, and networking opportunities.</p>
        </div>
        <div className="club-card">
          <h3>Techno Crats</h3>
          <p>Centered on technological innovation, Techno Crats organizes workshops, hackathons, and seminars to help students stay abreast of the latest advancements in electronics and communication technology.</p>
        </div>
        <div className="club-card">
          <h3>Young Caliber</h3>
          <p>Driven by a passion for social responsibility, Young Caliber is a student-led initiative aimed at helping the needy by organizing drives to distribute food, clothes, books, and other essentials to those in need.</p>
        </div>
      </div>

      <h2 className='About_h2'>Testimonials</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>"ACME has been a pivotal part of my college life, providing me with opportunities to learn and grow beyond the classroom."</p>
          <span>- Alex, ECE Student</span>
        </div>
        <div className="testimonial">
          <p>"Being a part of Techno Crats has significantly improved my technical skills and prepared me for industry challenges."</p>
          <span>- Priya, ECE Student</span>
        </div>
        <div className="testimonial">
          <p>"Young Caliber's initiatives have taught me the importance of giving back to the community."</p>
          <span>- Rahul, ECE Student</span>
        </div>
      </div>
    </div>
  );
}
