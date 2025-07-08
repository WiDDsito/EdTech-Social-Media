import express from 'express';
import Log from '../models/log.js';

const router = express.Router();

// GET all logs (con populate para ver datos de usuario)
router.get('/', async (req, res) => {
  try {
    // Si quieres ver los detalles del usuario asociado, usa .populate('userId')
    const data = await Log.find().populate('userId', 'firstName lastName email');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET log by ID (con populate)
router.get('/:id', async (req, res) => {
  try {
    const data = await Log.findById(req.params.id).populate('userId', 'firstName lastName email');
    if (!data) return res.status(404).json({ message: 'Log no encontrado' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new log
router.post('/', async (req, res) => {
  const item = new Log(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a log by ID (los logs generalmente no se actualizan)
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Log.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Log no encontrado' });
    res.json({ message: 'Log eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
