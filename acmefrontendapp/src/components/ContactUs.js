import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <section className="intro">
        <h1 className="intro-title">Contact Us</h1>
        <h2 className="intro-heading">Introduction</h2>
        <p className="intro-text">
          Hello, I am Senapathi Mahesh, a student of Sree Vidyanikethan Engineering College,
          batch 2020 to 2024, from the Electronics and Communication Engineering department.
        </p>
      </section>
      <section className="personal-contact">
        <h2 className="personal-heading">My Contact Details</h2>
        <p className="contact-item">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <strong> Instagram ID:</strong> <a href="https://www.instagram.com/lts_mahesh/" className="no-underline"> lts_mahesh</a>
        </p>
        <p className="contact-item">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <strong> LinkedIn ID:</strong> <a href="https://www.linkedin.com/in/mahesh-senapathi-1a6058204/" className="no-underline"> Senapathi Mahesh</a>
        </p>
        <p className="contact-item">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          <strong> WhatsApp Number:</strong> <a href="https://wa.me/+917995367273" className="no-underline"> +91 79953 67273</a>
        </p>
      </section>
      <section className="acme-contact">
        <h2 className="acme-heading">ACME Contact Details</h2>
        <p className="contact-item">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <strong> Instagram ID:</strong> <a href="https://www.instagram.com/svec_acme/" className="no-underline">svec_acme</a>
        </p>
        {/* <p className="contact-item">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <strong> LinkedIn ID:</strong> <a href="https://linkedin.com/in/acme_linkedin_id" className="no-underline">acme_linkedin_id</a>
        </p> */}
        <p className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <strong> Address:</strong> ECE HOD Room, Sree Vidyanikethan Engineering College
        </p>
      </section>
    </div>
  );
}

export default ContactUs;
