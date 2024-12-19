import { IPost, Post } from "../models/post.model";

export class PostService {
    public async getAllPosts(): Promise<IPost[]> {
        return Post.find().sort({ createdAt: -1 });
    }

    public async getPostById(id: string): Promise<IPost | null> {
        return Post.findById(id);
    }

    public async createPost(postData: Partial<IPost>): Promise<IPost> {
        const post = new Post(postData);
        return post.save();
    }

    public async updatePost(
        id: string,
        postData: Partial<IPost>
    ): Promise<IPost | null> {
        return Post.findByIdAndUpdate(id, postData, { new: true });
    }

    public async deletePost(id: string): Promise<boolean> {
        const result = await Post.findByIdAndDelete(id);
        return !!result;
    }
}
