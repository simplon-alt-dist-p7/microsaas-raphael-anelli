import "reflect-metadata";
import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));