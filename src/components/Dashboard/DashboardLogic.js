// src/components/Dashboard/DashboardLogic.js

import { TRASH, CLUTTER } from "../../data/definitions";

// Temporary classification function for demo
export const classifyItem = (item) => {
  // Example logic: if item has zero value, classify as Trash, otherwise Clutter
  if (item.value === 0) return TRASH.name;
  return CLUTTER.name;
};
