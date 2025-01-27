import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedAffirmation, setSelectedAffirmation] = useState(''); // Affirmation to display in the popup
  const [showPopup, setShowPopup] = useState(false);

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

  const handleGoalClick = (goal) => {
    setSelectedGoal(goal);
    setSelectedAffirmation(''); // Clear previous affirmation when a new goal is clicked
    setShowPopup(true);
  };

  const handleAffirmationSelection = async (type) => {
    try {
      const response = await fetch(`http://localhost:5003/api/affirmations?goal=${encodeURIComponent(selectedGoal)}`);
      const data = await response.json();

      // Update the affirmation in the popup
      if (type === "quick") {
        setSelectedAffirmation(data["Short Affirmation"]);
      } else if (type === "thoughtful") {
        setSelectedAffirmation(data["Medium Affirmation"]);
      } else if (type === "deep") {
        setSelectedAffirmation(data["Long Affirmation"]);
      }
    } catch (err) {
      console.error("Error fetching affirmation:", err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="ellipse ellipse-3"></div>

      <div className="main-text">empower your mind</div>
      <div>select a goal of yours to generate a positive affirmation</div>

      <div className="group-bubbles">
        {groups.map((group, index) => (
          <div key={index} className="bubble-container">
            <div className="bubble">
              {group._id}
              <div className="menu">
                {group.goals.map((goal, i) => (
                  <div key={i} className="menu-item" onClick={() => handleGoalClick(goal)}>
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            {!selectedAffirmation ? (
              <>
                <h3>What kind of support are you looking for right now?</h3>
                <button onClick={() => handleAffirmationSelection("quick")}>Something Quick</button>
                <button onClick={() => handleAffirmationSelection("thoughtful")}>Something Thoughtful</button>
                <button onClick={() => handleAffirmationSelection("deep")}>Something Deep</button>
              </>
            ) : (
              <>
                <h3>Your Affirmation:</h3>
                <p>{selectedAffirmation}</p>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
