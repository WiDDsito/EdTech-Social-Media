import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import categoriasRoutes from './routes/categorias.js';
import logsRoutes from './routes/logs.js';
import ordenesRoutes from './routes/ordenes.js';
import postsRoutes from './routes/posts.js';
import productosRoutes from './routes/productos.js';
import usuariosRoutes from './routes/usuarios.js';

dotenv.config();
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/api/categories', categoriasRoutes);
app.use('/api/logs', logsRoutes);
app.use('/api/orders', ordenesRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/products', productosRoutes);
app.use('/api/users', usuariosRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
