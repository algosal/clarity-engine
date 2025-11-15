// src/components/ItemClassifier/ItemClassifierLogic.js
import { classifyItem } from "../../utils/decisionTree";

/**
 * Handles adding and classifying a new item
 * @param {Object} item - Raw item from user input
 * @param {Array} items - Current list of items
 * @returns {Array} - Updated items array with new classified item
 */
export const addItemAndClassify = (item, items) => {
  const classifiedItem = classifyItem(item);
  return [...items, classifiedItem];
};
