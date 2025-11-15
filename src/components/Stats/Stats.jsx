import React, { useEffect, useState } from "react";
import { sampleItems } from "../../data/sampleItems"; // import JS array
import "./Stats.css";

const Stats = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    // simulate fetching from backend
    setSavedItems(sampleItems);
  }, []);

  return (
    <div className="stats-container">
      <h2>Saved Item Stats</h2>
      {savedItems.map((item, index) => (
        <div key={index} className="stats-card">
          <h3>{item.name}</h3>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
          <p>
            <strong>Classification:</strong> {item.classification || "N/A"}
          </p>
          {item.trashReason && (
            <p>
              <strong>Reason:</strong> {item.trashReason}
            </p>
          )}
          <p>
            <strong>Score:</strong> {item.score || "N/A"}
          </p>
          <p>
            <strong>Alignment:</strong> {item.alignment}
          </p>
          <p>
            <strong>Emotional Attachment:</strong> {item.emotionalAttachment}
          </p>
          <p>
            <strong>Functional Value:</strong> {item.value}
          </p>
          {item.recommendedPrinciple && (
            <p>
              <strong>Recommended Principle:</strong>{" "}
              {item.recommendedPrinciple}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stats;
