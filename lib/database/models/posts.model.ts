import { Schema , models , model } from "mongoose";



const postsSchema = new Schema({ 

    content: { type: String, required: true, maxlength: 280 },
    username: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    retweets: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    // replies: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

})

export const Post = models.Post || model('Post', postsSchema)