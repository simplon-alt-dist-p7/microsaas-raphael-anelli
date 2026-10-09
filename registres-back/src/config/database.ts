import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Espece } from "../models/espece.model.ts";

dotenv.config();

const requiredEnvVars = [
  "DB_HOST",
  "DB_PORT",
  "DB_NAME",
  "DB_USER",
  "DB_PASSWORD",
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`❌ Variable d'environnement manquante: ${envVar}`);
  }
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST!,   
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME!,
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,

  // Liste de toutes vos entities
  entities: [Espece],

  // Synchronisation automatique des schémas
  synchronize: false, // Laisser à false, pour utiliser les migrations

  // Logs des requêtes SQL générées
  logging: true,

  // Pool de connexions
  extra: {
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  },
});

export const connectDB = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log("✅ TypeORM connecté à PostgreSQL avec succès");
  } catch (error) {
    console.error("❌ Erreur de connexion TypeORM:", error);
    process.exit(1);
  }
};

process.on("SIGINT", async () => {
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy();
    console.log("🔒 TypeORM déconnecté");
  }
  process.exit(0);
});

process.on("SIGTERM", async () => {
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy();
    console.log("🔒 TypeORM déconnecté");
  }
  process.exit(0);
});