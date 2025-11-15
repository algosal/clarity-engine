// src/components/Stats/StatsLogic.js
import { sampleItems } from "../../data/sampleItems";

export const getStatsData = () => {
  const items = sampleItems;

  const stats = {
    totalItems: items.length,
    classified: {
      trash: 0,
      clutter: 0,
      keep: 0,
    },
    avgValue: 0,
    avgEmotionalAttachment: 0,
    avgAlignment: 0,
  };

  let valueSum = 0,
    emotionalSum = 0,
    alignmentSum = 0;

  items.forEach((item) => {
    const cls = item.classification?.toLowerCase();
    if (cls && stats.classified.hasOwnProperty(cls)) stats.classified[cls] += 1;

    valueSum += item.value || 0;
    emotionalSum += item.emotionalAttachment || 0;
    alignmentSum += item.alignment || 0;
  });

  stats.avgValue = (valueSum / items.length).toFixed(2);
  stats.avgEmotionalAttachment = (emotionalSum / items.length).toFixed(2);
  stats.avgAlignment = (alignmentSum / items.length).toFixed(2);

  return stats;
};
