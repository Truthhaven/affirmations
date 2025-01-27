import React from 'react';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  const groups = [
    { name: 'Education', goals: ['Learn a new skill', 'Read a book', 'Take a course'] },
    { name: 'Healthcare', goals: ['Schedule a checkup', 'Drink more water', 'Exercise daily'] },
    { name: 'Fitness', goals: ['Run 5k', 'Join a gym', 'Try yoga'] },
    { name: 'Wellness', goals: ['Practice meditation', 'Get 8 hours of sleep', 'Take a mental health day'] },
    { name: 'Personal Growth', goals: ['Set personal goals', 'Reflect daily', 'Start journaling'] },
    { name: 'Mental Health', goals: ['Talk to a therapist', 'Practice gratitude', 'Take breaks'] },
    { name: 'Productivity', goals: ['Plan your day', 'Eliminate distractions', 'Focus on one task'] },
    { name: 'Relationships', goals: ['Call a friend', 'Plan a date', 'Reconnect with someone'] },
    { name: 'Creativity', goals: ['Start a new project', 'Draw something', 'Write a poem'] },
    { name: 'Adventure', goals: ['Travel somewhere new', 'Try a new activity', 'Explore your city'] },
  ];

  return (
    <div className="container">
      {/* Ellipses */}
      <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="ellipse ellipse-3"></div>

      {/* Main Text */}
      <div className="main-text">empower your mind</div>
      <div> select a goal of yours to generate a positive affirmation</div>

      
      {/* Group Bubbles */}
      <div className="group-bubbles">
        {groups.map((group, index) => (
          <div key={index} className="bubble-container">
            <div className="bubble">
              {group.name}
              {/* Menu */}
              <div className="menu">
                {group.goals.map((goal, i) => (
                  <div key={i} className="menu-item">
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;