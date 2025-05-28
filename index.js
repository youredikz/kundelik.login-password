const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // отдаём index.html

const WEBHOOK_URL = "https://discord.com/api/webhooks/1377357139143561277/RONanVG_uRMfbY220pIpk6G3yWx9jXsvUixm7zKkO-wp4luIc8GyR-ys1Sc9PylcR4ag";

app.post("/send", async (req, res) => {
  const { message } = req.body;

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: 📩 Сообщение: ${message} })
    });

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("✅ Сервер запущен"));
