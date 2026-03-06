import express from "express";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  const apiKeys: Record<string, string> = {
    zapier: '',
    make: '',
    rapidapi: ''
  };

  app.get("/api/keys", (req, res) => {
    res.json(apiKeys);
  });

  app.post("/api/keys", (req, res) => {
    const { zapier, make, rapidapi } = req.body;
    if (zapier !== undefined) apiKeys.zapier = zapier;
    if (make !== undefined) apiKeys.make = make;
    if (rapidapi !== undefined) apiKeys.rapidapi = rapidapi;
    res.json({ status: "success" });
  });

  app.post("/api/integrations/zapier", async (req, res) => {
    // Proxy request to Zapier
    res.json({ status: "success", message: "Zapier integration triggered" });
  });

  app.post("/api/integrations/make", async (req, res) => {
    // Proxy request to Make
    res.json({ status: "success", message: "Make integration triggered" });
  });

  app.post("/api/integrations/rapidapi", async (req, res) => {
    // Proxy request to RapidAPI
    res.json({ status: "success", message: "RapidAPI integration triggered" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
