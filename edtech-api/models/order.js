import mongoose from 'mongoose';

const ordenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, // Referencia al usuario
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true } // Precio del producto en el momento de la compra
    }
  ],
  total: { type: Number, required: true },
  shippingAddress: {
    street: { type: String },
    city: { type: String },
    province: { type: String },
    postalCode: { type: String },
    country: { type: String, default: "Perú" }
  },
  paymentMethod: { type: String },
  trackingNumber: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', ordenSchema);