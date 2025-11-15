// src/services/clarityApi.js
const API_URL =
  "https://54jek2d2rg.execute-api.us-east-2.amazonaws.com/Principles/clarity-engine";

/**
 * Generic call to the Clarity Engine Lambda
 * @param {string} method - "save" or "get"
 * @param {object} bodyData - The object to send inside body (will be stringified)
 */
async function callClarityEngine(method, bodyData) {
  try {
    const payload = {
      httpMethod: method.toUpperCase() === "GET" ? "GET" : "POST",
      body: JSON.stringify(bodyData), // <-- body stringified exactly like your example
    };

    const response = await fetch(API_URL, {
      method: "POST", // we always POST to Lambda
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // <-- send the payload object as JSON
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API error: ${response.status} ${text}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Clarity API call error:", err);
    throw err;
  }
}

/**
 * Save or update a single item for a user
 */
export async function saveItem(userId, epoch, itemData) {
  const bodyData = {
    userId: String(userId),
    epoch: String(epoch),
    itemData: {
      ...itemData,
      // ensure everything is a string to match your format
      value: String(itemData.value),
      emotionalAttachment: String(itemData.emotionalAttachment),
      alignment: String(itemData.alignment),
      easilyRebuyable: String(itemData.easilyRebuyable),
      classification: String(itemData.classification),
      trashReason: String(itemData.trashReason || ""),
      justification: String(itemData.justification || ""),
      score: String(itemData.score || ""),
      recommendedPrinciple: String(itemData.recommendedPrinciple || ""),
      aiSuggestion: String(itemData.aiSuggestion || ""), // <-- add this
    },
  };

  return callClarityEngine("POST", bodyData);
}

/**
 * Fetch items starting from a given epoch
 * */

export const getItems = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST", // using POST for get as per your setup
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ method: "get" }), // signal to lambda it's a get
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    // Lambda wraps actual items in `body` as string, so parse it
    return JSON.parse(data.body);
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};
