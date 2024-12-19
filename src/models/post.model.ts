import { Schema, model, Document } from "mongoose";

export interface IPost extends Document {
    title: string;
    content: string;
    author: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        tags: [
            {
                type: String,
                trim: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Post = model<IPost>("Post", PostSchema);
