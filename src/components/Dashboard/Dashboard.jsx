import React, { useState } from "react";
import TrashClutterDefinition from "../TrashClutterDefinition/TrashClutterDefinition";
import ItemClassifier from "../ItemClassifier/ItemClassifier";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const modules = [
    { key: "definitions", label: "Trash vs Clutter" },
    { key: "classifier", label: "Item Classifier" },
    { key: "summary", label: "Summary / Stats" },
  ];

  const renderModule = () => {
    switch (activeModule) {
      case "definitions":
        return <TrashClutterDefinition />;
      case "classifier":
        return <ItemClassifier />;
      case "summary":
        return (
          <div className="placeholder">Summary / Stats Module Coming Soon</div>
        );
      default:
        return (
          <div className="dashboard-welcome">
            <h2>Welcome to Clarity Engine</h2>
            <p>Select a module to get started:</p>
          </div>
        );
    }
  };

  const handleModuleClick = (key) => {
    setActiveModule(key);
    setModalOpen(false); // close modal after selection
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Clarity Engine Dashboard</h1>

      {/* Hamburger icon for mobile */}
      <div className="hamburger-icon" onClick={() => setModalOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Desktop buttons */}
      <div className="dashboard-buttons">
        {modules.map((mod) => (
          <button
            key={mod.key}
            onClick={() => handleModuleClick(mod.key)}
            className={activeModule === mod.key ? "active" : ""}
          >
            {mod.label}
          </button>
        ))}
      </div>

      {/* Modal for mobile */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modules.map((mod) => (
              <button
                key={mod.key}
                onClick={() => handleModuleClick(mod.key)}
                className={activeModule === mod.key ? "active" : ""}
              >
                {mod.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="module-container">{renderModule()}</div>
    </div>
  );
};

export default Dashboard;
