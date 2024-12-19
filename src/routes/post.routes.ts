import { RequestHandler, Router } from "express";
import { PostController } from "../controllers/post.controller";
import { PostService } from "../services/post.service";
import { validatePost } from "../middlewares/validation.middleware";

export const postRoutes = Router();
const postService = new PostService();
const postController = new PostController(postService);

postRoutes.get("/", postController.getAllPosts as RequestHandler);
postRoutes.get("/:id", postController.getPostById as RequestHandler);
postRoutes.post("/", validatePost, postController.createPost as RequestHandler);
postRoutes.put(
    "/:id",
    validatePost,
    postController.updatePost as RequestHandler
);
postRoutes.delete("/:id", postController.deletePost as RequestHandler);
