import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return res.status(500).json({ error: "Payment configuration missing" });
  }

  const amount = Number(req.body?.amount);

  if (!Number.isInteger(amount) || amount < 100) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Authorization": "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: "Unable to create payment order" });
    }

    return res.status(200).json({
      order_id: data.id,
      amount: data.amount,
      currency: data.currency,
      key_id: keyId
    });
  } catch {
    return res.status(500).json({ error: "Payment service unavailable" });
  }
}
