import express, { Express } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import registrationRoutes from "./routes/v1/Registration";
import leaderboardRoutes from "./routes/v1/Leaderboard";
import contactRoutes from "./routes/v1/Contact";
import eventRoutes from "./routes/v1/Event";
import adminRoutes from "./routes/v1/Admin";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.CLIENT_URL, process.env.ADMIN_URL] as string[],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

connect(process.env.MONGODB_URL as string, {
  dbName: process.env.DBNAME,
})
.then((_) => console.log("Connected to database"))
.catch((error) => {
  console.log("connection failed! ", error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.use("/v1/admin", adminRoutes);
app.use("/v1/contact", contactRoutes);
app.use("/v1/register", registrationRoutes);
app.use("/v1/leaderboard", leaderboardRoutes);
app.use("/v1/event", eventRoutes);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});