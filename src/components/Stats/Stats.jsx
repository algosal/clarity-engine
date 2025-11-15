import React, { useEffect, useState } from "react";
import { getItems } from "../../services/clarityApi"; // import the service
import "./Stats.css";

const Stats = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getItems();
      setSavedItems(items);
    };
    fetchItems();
  }, []);

  return (
    <div className="stats-container">
      <h2>Saved Item Stats</h2>
      {savedItems.length === 0 ? (
        <p>No items saved yet.</p>
      ) : (
        savedItems.map((item, index) => (
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
            {item.aiSuggestion && (
              <p>
                <strong>AI Suggested Decision:</strong> {item.aiSuggestion}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Stats;
