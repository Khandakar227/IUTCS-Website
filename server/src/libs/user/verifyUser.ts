import { NextFunction, Request, Response } from "express";

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // verify token from cookie
        console.log(req.cookies);
        next();
    } catch (error) {
        const err = error as Error;
        console.log(err.message);
        res
        .status(403)
        .json({
            error: true,
            message: `Unexpected error occured on the server. ${err.message}`,
        });
    }
}