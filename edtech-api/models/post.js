import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, // Referencia al usuario que creó el post
  content: { type: String, required: true },
  mediaUrls: [{ type: String }], // Array de URLs para imágenes/videos del post
  createdAt: { type: Date, default: Date.now },
  commentsCount: { type: Number, default: 0 },
  likesCount: { type: Number, default: 0 }
});

export default mongoose.model('Post', postSchema);