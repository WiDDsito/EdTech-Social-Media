import express from 'express';
import Categoria from '../models/categoria.js'; 

const router = express.Router();

// GET all categorias
router.get('/', async (req, res) => {
  try {
    const data = await Categoria.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET categoria by ID
router.get('/:id', async (req, res) => {
  try {
    const data = await Categoria.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new categoria
router.post('/', async (req, res) => {
  const item = new Categoria(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) a categoria by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedItem) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a categoria by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Categoria.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;