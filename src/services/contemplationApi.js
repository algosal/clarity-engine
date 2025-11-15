// src/services/contemplationApi.js

const CONTEMPLATION_URL =
  "https://54jek2d2rg.execute-api.us-east-2.amazonaws.com/Principles/contemplation";

export async function getAiDecisionFromItem(item) {
  // Build a contemplation statement from the item
  const eventDescription = `
I am evaluating an item:
- Name: ${item.name}
- Description: ${item.description}
- Classification: ${item.classification}
- Functional Value: ${item.value}
- Emotional Attachment: ${item.emotionalAttachment}
- Alignment: ${item.alignment}
- Easily Rebuyable: ${item.easilyRebuyable}

Give me a decision based on my principles whether I should keep or remove this.
`.trim();

  // Wrap the object as a JSON string inside "body"
  const body = {
    body: JSON.stringify({
      userId: "salman",
      eventDescription,
    }),
  };

  try {
    const res = await fetch(CONTEMPLATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // <--- stringify the wrapper object
    });

    const data = await res.json();

    // The API responds with JSON inside data.body
    const parsed = JSON.parse(data.body);
    return parsed.aiDecision || "";
  } catch (err) {
    console.error("AI contemplation error:", err);
    return "";
  }
}
