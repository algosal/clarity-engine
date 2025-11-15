// src/components/ItemClassifier/ItemClassifier.jsx
import React, { useState } from "react";
import { addItemAndClassify } from "./ItemClassifierLogic";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./ItemClassifier.css";

const ItemClassifier = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    value: 1,
    emotionalAttachment: 0,
    alignment: 1,
    easilyRebuyable: false,
  });
  const [recommendedPrinciple, setRecommendedPrinciple] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : parseFloat(value) || value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItems = addItemAndClassify(formData, items);
    setItems(updatedItems);
    setFormData({
      name: "",
      description: "",
      value: 1,
      emotionalAttachment: 0,
      alignment: 1,
      easilyRebuyable: false,
    });
    setRecommendedPrinciple(""); // clear principle input for next item
  };

  const handleSaveLatest = () => {
    if (items.length === 0) return;
    const latestItem = items[items.length - 1];
    const payload = {
      ...latestItem,
      recommendedPrinciple: recommendedPrinciple || null,
    };
    console.log("Saved item:", payload);
    alert("Latest item saved! Check console for result.");
  };

  const latestItemExists = items.length > 0;
  const latestItem = latestItemExists ? items[items.length - 1] : null;

  return (
    <div className="classifier-container">
      <h2>Item Classifier</h2>

      <form className="item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Item Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        {/* Functional Value */}
        <label>
          <div className="label-text">
            Functional Value (0-1)
            <span
              data-tooltip-id="tooltip-functional"
              data-tooltip-content="0 = completely useless, 1 = fully functional. Even high-value items are pragmatically nonfunctional if you are not using them."
            >
              ℹ️
            </span>
          </div>
          <input
            type="number"
            name="value"
            min="0"
            max="1"
            step="0.1"
            value={formData.value}
            onChange={handleChange}
            required
          />
        </label>
        <Tooltip id="tooltip-functional" place="right" variant="dark" />

        {/* Emotional Attachment */}
        <label>
          <div className="label-text">
            Emotional Attachment (0-1)
            <span
              data-tooltip-id="tooltip-emotional"
              data-tooltip-content="0 = no attachment, 1 = very attached. Reflects ego, nostalgia, or unresolved emotional ties — not always practical."
            >
              ℹ️
            </span>
          </div>
          <input
            type="number"
            name="emotionalAttachment"
            min="0"
            max="1"
            step="0.1"
            value={formData.emotionalAttachment}
            onChange={handleChange}
            required
          />
        </label>
        <Tooltip id="tooltip-emotional" place="right" variant="dark" />

        {/* Alignment */}
        <label>
          <div className="label-text">
            Alignment (0-1)
            <span
              data-tooltip-id="tooltip-alignment"
              data-tooltip-content="0 = completely misaligned, 1 = perfectly aligned. Measures how well the item fits your current environment, priorities, and purpose."
            >
              ℹ️
            </span>
          </div>
          <input
            type="number"
            name="alignment"
            min="0"
            max="1"
            step="0.1"
            value={formData.alignment}
            onChange={handleChange}
            required
          />
        </label>
        <Tooltip id="tooltip-alignment" place="right" variant="dark" />

        {/* Easily Rebuyable */}
        <label>
          <div className="label-text">
            Easily Rebuyable
            <span
              data-tooltip-id="tooltip-rebuyable"
              data-tooltip-content="Select whether this item can be easily rebought. Even valuable items can be discarded if easily replaceable and not used."
            >
              ℹ️
            </span>
          </div>
          <select
            name="easilyRebuyable"
            value={formData.easilyRebuyable ? "true" : "false"}
            onChange={(e) =>
              setFormData({
                ...formData,
                easilyRebuyable: e.target.value === "true",
              })
            }
          >
            <option value="false">Hard to Replace</option>
            <option value="true">Easily Rebuyable</option>
          </select>
        </label>
        <Tooltip id="tooltip-rebuyable" place="right" variant="dark" />

        <button type="submit">Classify Item</button>
      </form>

      <div className="classified-items">
        {items.length === 0 ? (
          <p>No items classified yet.</p>
        ) : (
          <>
            {items.map((item, index) => (
              <div
                key={index}
                className={`item-card ${item.classification?.toLowerCase()}`}
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>
                  <strong>Classification:</strong> {item.classification}
                </p>
                {item.trashReason && (
                  <p>
                    <strong>Reason:</strong> {item.trashReason}
                  </p>
                )}
                <p>
                  <strong>Score:</strong> {item.score}
                </p>
                <p>
                  <strong>Justification:</strong> {item.justification}
                </p>
              </div>
            ))}

            {/* Recommended Principle & Save under last item */}
            {/* Recommended Principle & Save under last item */}
            {latestItem && (
              <div className="save-section">
                <label>
                  <div className="label-text">Recommended Principle</div>
                  <input
                    type="text"
                    placeholder="Optional: write a principle for this item"
                    value={recommendedPrinciple}
                    onChange={(e) => setRecommendedPrinciple(e.target.value)}
                  />
                </label>

                <div className="save-buttons">
                  <button
                    className="item-form-button"
                    onClick={handleSaveLatest}
                  >
                    Save Latest Item
                  </button>
                  <button
                    className="item-form-button clear-button"
                    onClick={() => {
                      setItems([]);
                      setRecommendedPrinciple("");
                    }}
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ItemClassifier;
