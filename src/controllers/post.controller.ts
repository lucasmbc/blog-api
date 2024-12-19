import { Request, Response, NextFunction } from "express";
import { PostService } from "../services/post.service";
import { CreatePostRequest } from "../types/custom";

export class PostController {
    constructor(private postService: PostService) {}

    public getAllPosts = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const posts = await this.postService.getAllPosts();
            res.json(posts);
        } catch (error) {
            next(error);
        }
    };

    public getPostById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const post = await this.postService.getPostById(req.params.id);
            if (!post) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json(post);
        } catch (error) {
            next(error);
        }
    };

    public createPost = async (
        req: CreatePostRequest,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const post = await this.postService.createPost(req.body);
            res.status(201).json(post);
        } catch (error) {
            next(error);
        }
    };

    public updatePost = async (
        req: CreatePostRequest,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const post = await this.postService.updatePost(
                req.params.id,
                req.body
            );
            if (!post) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json(post);
        } catch (error) {
            next(error);
        }
    };

    public deletePost = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const success = await this.postService.deletePost(req.params.id);
            if (!success) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };
}
