// src/data/sampleItems.js

export const sampleItems = [
  {
    name: "Old Receipt",
    description: "A crumpled receipt from 2019",
    value: 0,
    emotionalAttachment: 0.1, // very low attachment
    alignment: 0.0, // completely misaligned
    easilyRebuyable: true, // can easily be reissued if needed
    classification: null,
    trashReason: null,
  },
  {
    name: "Unused Notebook",
    description: "Notebook kept from last year, never opened",
    value: 1,
    emotionalAttachment: 0.6, // moderate attachment
    alignment: 0.5, // somewhat misaligned
    easilyRebuyable: true, // could be replaced if needed
    classification: null,
    trashReason: null,
  },
  {
    name: "Gift Mug",
    description: "Mug from a friend, rarely used",
    value: 1,
    emotionalAttachment: 0.8, // high attachment
    alignment: 0.4, // slightly misaligned
    easilyRebuyable: true, // can rebuy if lost
    classification: null,
    trashReason: null,
  },
  {
    name: "Old Phone Charger",
    description: "Charger from previous phone, rarely used",
    value: 0,
    emotionalAttachment: 0.2,
    alignment: 0.3,
    easilyRebuyable: true,
    classification: null,
    trashReason: null,
  },
  {
    name: "Stack of Magazines",
    description: "Magazines collected over several months, never read",
    value: 0,
    emotionalAttachment: 0.4,
    alignment: 0.2,
    easilyRebuyable: false,
    classification: null,
    trashReason: null,
  },
  {
    name: "Kitchen Knife Set",
    description: "High-quality knives, occasionally used",
    value: 1,
    emotionalAttachment: 0.3,
    alignment: 0.8, // mostly well-placed
    easilyRebuyable: false,
    classification: null,
    trashReason: null,
  },
  {
    name: "Decorative Vase",
    description: "Aesthetic vase, rarely used, occupies space",
    value: 1,
    emotionalAttachment: 0.7,
    alignment: 0.2,
    easilyRebuyable: true,
    classification: null,
    trashReason: null,
  },
];
