import { Request, Response } from "express";
import LeaderBoard from "../model/LeaderBoard";

export const getLeaderBoard = async (req: Request, res: Response) => {
    try {
        const lb = await LeaderBoard.find();
        res.status(200).json({error: false, leaderboard: lb});
    } catch (err) {
        const error = err as Error;
        console.log(error.message);
        res
        .status(500)
        .json({
            error: true,
            message: `Failed to add leaderboard info. ${error.message}`,
        });
    }
}

export const addToLeaderboard = async (req: Request, res: Response) => {
    try {
        const { team_name, ranking, university, competition_name } = req.body;
        const lb = await LeaderBoard.create({ team_name, ranking, university, competition_name });
        await lb.save();
        res.status(200).json({error: false, message: "Added to leader board"});
    } catch (err) {
        const error = err as Error;
        console.log(error.message);
        res.status(500)
          .json({
            error: true,
            message: `Failed to get leaderboard info. ${error.message}`,
          });
    }
    }