import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  isActive: { type: Boolean, default: true }
});

export default mongoose.model('Categoria', categoriaSchema);