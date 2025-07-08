import express from 'express';
import Orden from '../models/order.js'; 

const router = express.Router();

// GET all ordenes (con populate para ver datos de usuario y productos)
router.get('/', async (req, res) => {
  try {
    const data = await Orden.find()
      .populate('userId', 'firstName lastName email') // Incluye nombre y email del usuario
      .populate('items.productId', 'name price imageUrls'); // Incluye nombre, precio e imágenes de los productos
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET orden by ID (con populate)
router.get('/:id', async (req, res) => {
  try {
    const data = await Orden.findById(req.params.id)
      .populate('userId', 'firstName lastName email')
      .populate('items.productId', 'name price imageUrls');
    if (!data) return res.status(404).json({ message: 'Orden no encontrada' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new orden
router.post('/', async (req, res) => {
  const item = new Order(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) an orden by ID (ej. para actualizar estado de envío)
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Orden.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedItem) return res.status(404).json({ message: 'Orden no encontrada' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE an orden by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Orden.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Orden no encontrada' });
    res.json({ message: 'Orden eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;