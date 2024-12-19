import { Request, Response, NextFunction } from "express";
import { body, ValidationChain, validationResult } from "express-validator";
import { RequestHandler } from "express";

const validationRules: ValidationChain[] = [
    body("title").trim().notEmpty().withMessage("Title is required"),
    body("content").trim().notEmpty().withMessage("Content is required"),
    body("author").trim().notEmpty().withMessage("Author is required"),
    body("tags").optional().isArray(),
];

const validate: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    next();
};

export const validatePost = [...validationRules, validate];
