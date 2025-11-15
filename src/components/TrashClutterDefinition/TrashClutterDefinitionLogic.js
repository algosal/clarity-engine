// src/components/TrashClutterDefinition/TrashClutterDefinitionLogic.js

export const getDefinitionSummary = (item) => {
  if (item.name === "Trash") {
    return "Final: No value, discard immediately.";
  } else if (item.name === "Clutter") {
    return "Manageable: Reassign, reduce, or release based on alignment.";
  } else {
    return "";
  }
};
