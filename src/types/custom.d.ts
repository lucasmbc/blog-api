import { Request as ExpressRequest } from "express";
import { IPost } from "../models/post.model";

export interface CreatePostRequest extends ExpressRequest {
    body: Partial<IPost>;
}
