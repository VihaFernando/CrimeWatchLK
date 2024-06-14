import React from 'react';
import './Homepage.css';
import Header from './Header';

function HomePage() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    // Example: Log form data to console
    for (const [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }

    // Further processing or submission logic can be added here
  };

  return (
    <div>
      <Header />
      <div className="homepage">
        <div className="homepage__content">
          <h2>Welcome to CyberSafe LK</h2>
          <p>
            At CyberSafe Sri Lanka, we are dedicated to safeguarding your digital presence. If you've encountered a cybercrime or suspect malicious activity online, report it here to take immediate action. Together, we protect your online safety. Use the form on the right to <span>report now</span>.
          </p>
        </div>
        <div className="homepage__form-box">
          <div className="homepage__form">
            <form onSubmit={handleSubmit} method="POST">
              <label>Name</label>
              <input type="text" name="name" />
              
              <label>E-mail</label>
              <input type="email" name="email" />
              
              <label>Mobile Number</label>
              <input type="tel" name="mobile" />
              
              <label>City</label>
              <input type="text" name="city" />
              
              <label>Describe the incident</label>
              <textarea name="incident"></textarea>
              
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
