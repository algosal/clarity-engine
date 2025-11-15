// src/components/TrashClutterDefinition/TrashClutterDefinition.jsx
import React from "react";
import "./TrashClutterDefinition.css";
import { ALL_DEFINITIONS } from "../../data/definitions";
import { getDefinitionSummary } from "./TrashClutterDefinitionLogic";

const TrashClutterDefinition = () => {
  return (
    <div className="definition-container">
      <h1 className="definition-title">Clarity Engine: Trash vs Clutter</h1>
      {ALL_DEFINITIONS.map((item) => (
        <div key={item.name} className="definition-card">
          <h2>{item.name}</h2>
          <p className="description">{item.description}</p>
          <p className="energy-effect">
            <strong>Effect:</strong> {item.energyEffect}
          </p>
          <p className="action">
            <strong>Action:</strong> {item.action}
          </p>
          <p className="summary">{getDefinitionSummary(item)}</p>
        </div>
      ))}
    </div>
  );
};

export default TrashClutterDefinition;
