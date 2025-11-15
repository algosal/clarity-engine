// src/data/definitions.js

export const TRASH = {
  name: "Trash",
  description:
    "Anything with zero remaining value or purpose. Cannot be reused, repurposed, or emotionally useful.",
  energyEffect: "Trash drains because it is dead weight.",
  action: "Remove immediately.",
};

export const CLUTTER = {
  name: "Clutter",
  description:
    "Items not actively used, kept out of attachment, ego, or nostalgia, or misaligned (wrong place, quantity, or timing). If easily re-buyable and looks cluttered, trash it.",
  energyEffect:
    "Clutter drains because it is potential energy with no direction.",
  action:
    "Reassign, reduce, or release depending on alignment. If easily re-buyable, trash it.",
};

export const ALL_DEFINITIONS = [TRASH, CLUTTER];
