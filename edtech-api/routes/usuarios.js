import express from 'express';
import Usuario from '../models/usuario.js'; 

const router = express.Router();

// GET all usuarios
router.get('/', async (req, res) => {
  try {
    const data = await Usuario.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET usuario by ID
router.get('/:id', async (req, res) => {
  try {
    const data = await Usuario.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new usuario
router.post('/', async (req, res) => {
  const item = new Usuario(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) a usuario by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedItem) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a usuario by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Usuario.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
