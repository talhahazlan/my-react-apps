import React, { useState } from 'react';
import './Message.css';

const Message = () => {
  const compliments = [
    "You cantik gila nak mampus sayang.",
    "You have the most pretty voice ever <3",
    "You have a the most enchanting smile i pernah tengok",
    "You are so multitalented and the best main actor in the world (Iris's fans)",
    "You are a masterpiece in a world full of art (you are the art)",
    "You have enchanting aura (+9999999 aura)",
    "Your laugh is the sweetest melody I've ever heard.",
    "You are my little sunshine.",
    "You have the most beautiful soul ever.",
    "I am so lucky to have you in my life.",
    "I like to spend time with you sayang.",
    "I will always be here for you sayang.",
    "You have the eyes of my future wife sayang.",
  ];

  const [message, setMessage] = useState("Hello, Princess Aisyah");

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setMessage(compliments[randomIndex]);
  };

  return (
    <div className="message-container">
      <h2 className="header-text">#dailymandatorycompliments</h2>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click for today's compliments</button>
      {/* <footer className="footer-text">"You are my sunshine, my only sunshine"</footer> */}
    </div>
  );
};

export default Message;
