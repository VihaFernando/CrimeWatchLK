import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prevBlink) => !prevBlink);
    }, 700); // Blink every second

    setTimeout(() => {
      clearInterval(blinkInterval);
    }, 2300); // Stop blinking after 4 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img
          src="weblogo.png"
          alt="CyberSafe LK Logo"
          className={`loading-logo ${blink ? 'blink' : ''}`}
        />
        <h1>CyberSafe LK</h1>
      </div>
    </div>
  );
}

export default LoadingScreen;
