import React, { useState } from 'react';
import './Homepage.css';
import Header from './Header';

function HomePage() {
  const initialFormData = {
    name: '',
    email: '',
    mobile: '',
    city: '',
    incident: ''
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Form validation
    for (const value of Object.values(formData)) {
      if (!value) {
        setError('All fields are required.');
        return;
      }
    }
    
    setError(''); // Clear any previous error

    // Example: Log form data to console
    for (const [name, value] of Object.entries(formData)) {
      console.log(`${name}: ${value}`);
    }

    // Show success message
    setSubmitted(true);

    // Further processing or submission logic can be added here
  };

  const handleBackToHome = () => {
    setSubmitted(false); // Reset submitted state to show the form again
    setFormData({ ...initialFormData }); // Clear form data
  };

  if (submitted) {
    return (
      <div className="confirmation">
        <div className="confirmation__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
        <h2>Your complaint was successfully reported.</h2>
        <p>An agent will contact you soon. Thank you.</p>
        <button className="back-button" onClick={handleBackToHome}>Back to Home</button>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="homepage">
        <div className="homepage__content">
          <h2>Welcome to CrimeWatch LK</h2>
          <p>
          At CrimeWatch Sri Lanka, we are committed to ensuring the safety and security of our communities. 
          If you have witnessed or been a victim of a crime, report it here to take immediate action.
           Together, we can create a safer environment for everyone. Use the form on the right to <span>report now.</span>
          </p>
        </div>
        <div className="homepage__form-box">
          <div className="homepage__form">
            <form onSubmit={handleSubmit} method="POST">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              
              <label>E-mail</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              
              <label>Mobile Number</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
              
              <label>City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
              
              <label>Describe the incident</label>
              <textarea name="incident" value={formData.incident} onChange={handleChange}></textarea>
              
              {error && <p className="error">{error}</p>}

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
