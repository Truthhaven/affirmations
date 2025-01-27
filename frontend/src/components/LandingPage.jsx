import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [groups, setGroups] = useState([]); // State to store group data
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Fetch Data from Backend
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch("http://localhost:5003/api/groups");
        const data = await response.json();
        setGroups(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching groups:", err);
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {/* Ellipses */}
      <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="ellipse ellipse-3"></div>

      {/* Main Text */}
      <div className="main-text">empower your mind</div>
      <div>select a goal of yours to generate a positive affirmation</div>

      {/* Group Bubbles */}
      <div className="group-bubbles">
        {groups.map((group, index) => (
          <div key={index} className="bubble-container">
            <div className="bubble">
              {group._id} {/* Group Name */}
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
