"use client"
import React, { useState, useEffect } from 'react';

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    const intervalId = setInterval(updateClock, 1000); // Update every second

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="live-clock">
    <span className="time">[{currentTime ? currentTime : 'Loading...'}]</span>
    <span className="cet text-orange-500 text-xs ml-1">C.E.T</span>
  </div>
  );
};

export default LiveClock;
