import express from 'express';
import Producto from '../models/producto.js'; 

const router = express.Router();

// GET all productos (con populate para ver datos de categoría)
router.get('/', async (req, res) => {
  try {
    const data = await Producto.find().populate('categoryId', 'name'); // Incluye solo el nombre de la categoría
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET producto by ID (con populate)
router.get('/:id', async (req, res) => {
  try {
    const data = await Producto.findById(req.params.id).populate('categoryId', 'name');
    if (!data) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new producto
router.post('/', async (req, res) => {
  const item = new Producto(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) a producto by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedItem) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a producto by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Producto.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
