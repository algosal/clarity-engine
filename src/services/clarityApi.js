// src/services/clarityApi.js
const API_URL =
  "https://54jek2d2rg.execute-api.us-east-2.amazonaws.com/Principles/clarity-engine";

/**
 * Calls the Clarity Engine Lambda
 * @param {Object} payload - Object to send to Lambda
 * @param {string} method - HTTP method, default is POST
 * @returns {Promise<Object>} - JSON response
 */
export async function callClarityEngine(payload, method = "POST") {
  try {
    const response = await fetch(API_URL, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API error: ${response.status} ${text}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Clarity API call error:", err);
    throw err;
  }
}

/**
 * Save or update a single item for a user
 * @param {string} userId
 * @param {string} epoch
 * @param {Object} itemData
 */
export async function saveItem(userId, epoch, itemData) {
  return callClarityEngine({
    httpMethod: "POST",
    body: {
      userId,
      epoch,
      itemData,
    },
  });
}

/**
 * Fetch items for a user starting from a specific epoch
 * @param {string} userId
 * @param {string} startEpoch
 */
export async function getItems(userId, startEpoch = "0") {
  return callClarityEngine({
    httpMethod: "POST",
    body: {
      userId,
      startEpoch,
    },
  });
}
