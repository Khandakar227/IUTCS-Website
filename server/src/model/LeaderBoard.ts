import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const leaderboardModel = new Schema({
    team_name: { type: String, required: true },
    ranking: { type: Number, required: true },
    university: { type: String, required: true },
    competition: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },
});

const Leaderboard = model("Leaderboards", leaderboardModel);

export default Leaderboard;
