import "reflect-metadata";
import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import routes from "./routes/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route principale
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Bienvenue sur l'API Les Registres du Chaos",
    status: "running",
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Impossible de démarrer le serveur:", error);
    process.exit(1);
  }
};

if (process.env.NODE_ENV !== "test") {  // On vérifie qu'on n'est pas dans un environnement de test avant de lancer le serveur
  startServer();
}