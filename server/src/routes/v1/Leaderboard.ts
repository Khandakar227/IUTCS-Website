import express from "express";
import { getLeaderBoard } from "../../controller/Leaderboard";

const leaderboardRoutes = express.Router();

leaderboardRoutes.get("/", getLeaderBoard);

export default leaderboardRoutes;
