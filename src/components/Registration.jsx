// src/components/Registration.jsx

import { useState } from "react";
import emailjs from 'emailjs-com';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parameters for the email template
    const templateParams = {
      username: formData.username,
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      organizer_email: 'jowen22@murraystate.edu',  // Event organizer's email
    };

    // Send the email via EmailJS to the event organizer
    emailjs.send(
      'service_v5u9nxp',        // Your Service ID
      'template_3zp22lw',       // Your Template ID
      templateParams,
      '04RemTEg5UhPB-2Gh'       // Your Public API Key (User ID)
    )
    .then((response) => {
      setConfirmation(`Registration successful! The details have been sent to the event organizer.`);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      setConfirmation('Failed to send registration details to the event organizer.');
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <h2>Hackathon Registration</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>Register</button>
        </form>
        {confirmation && <p style={{ color: 'green' }}>{confirmation}</p>}
      </div>
    </div>
  );
};

export default Registration;
