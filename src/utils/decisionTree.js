// src/utils/decisionTree.js
import { TRASH, CLUTTER } from "../data/definitions";

/**
 * Classify an item based on functional value, emotional attachment, alignment, and rebuyability.
 * Includes AI-style justification.
 * @param {Object} item - The item object
 * @returns {Object} - Updated item with classification, trashReason, score, and justification
 */
export const classifyItem = (item) => {
  const { value, emotionalAttachment, alignment, easilyRebuyable } = item;

  let classification = null;
  let trashReason = null;
  let justification = "";

  // Score calculation
  const score = value * 0.5 + (1 - emotionalAttachment) * 0.3 + alignment * 0.2;

  // Thresholds
  const TRASH_THRESHOLD = 0.3;
  const CLUTTER_THRESHOLD = 0.6;

  // Decision tree logic
  if (value === 0) {
    classification = TRASH.name;
    trashReason = "No value";
    justification =
      "This item has zero functional value and contributes no utility.";
  } else if (score <= TRASH_THRESHOLD) {
    classification = TRASH.name;
    trashReason = "Score too low";
    justification =
      "The combined score of functional value, attachment, and alignment is too low.";
  } else if (emotionalAttachment > 0.5 || alignment < 0.5) {
    classification = CLUTTER.name;

    if (easilyRebuyable && value <= 0.5) {
      classification = TRASH.name;
      trashReason = "Low value and easily rebuyable";
      justification =
        "Although it may hold some attachment, the item is low value and can be easily replaced, so it is safe to discard.";
    } else if (emotionalAttachment > 0.5) {
      trashReason = "Attachment ended";
      justification =
        "The item is emotionally attached due to past memories or ego, but its alignment and utility are limited, making it clutter.";
    } else if (alignment < 0.5) {
      trashReason = "Misaligned";
      justification =
        "The item does not fit well in your current environment or purpose, reducing its effective value.";
    }
  } else if (score > CLUTTER_THRESHOLD) {
    classification = "Keep";
    trashReason = null;
    justification =
      "The item is valuable, well-aligned, and not excessively attached — keeping it maintains clarity and usefulness.";
  } else {
    classification = CLUTTER.name;
    trashReason = "Moderate score";
    justification =
      "The item has some utility or emotional significance but may not be fully aligned or optimized.";
  }

  return {
    ...item,
    classification,
    trashReason,
    justification,
    score: parseFloat(score.toFixed(2)),
  };
};
