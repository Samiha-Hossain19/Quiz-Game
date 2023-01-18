import React from "react";
import Card from "./Card";
import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) => {
  return (
    <Card>
      <h1 className="header">Welcome to Quiz Game!</h1>
      <h3 className="primary_text">Please enter your username</h3>
      <input 
      type="text" 
      className="username_input" 
      placeholder="Username" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
      <button className="start_btn" >Let's Play</button>
      <p className="top_score">
        Top score: <span>8</span>
      </p>
    </Card>
  );
};

export default StartingPage;
