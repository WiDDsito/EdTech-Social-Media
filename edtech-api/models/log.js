import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., 'login', 'purchase', 'view'
  message: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }, // Referencia al usuario
  details: {
    ip: { type: String },
    device: { type: String },
    orderId: { type: mongoose.Schema.Types.ObjectId }, // Puede ser nulo
    productId: { type: mongoose.Schema.Types.ObjectId } // Puede ser nulo
  },
  loggedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Log', logSchema);