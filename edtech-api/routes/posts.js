import express from 'express';
import Post from '../models/post.js';

const router = express.Router();

// GET all posts (con populate para ver datos de usuario)
router.get('/', async (req, res) => {
  try {
    const data = await Post.find().populate('userId', 'firstName lastName email');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET post by ID (con populate)
router.get('/:id', async (req, res) => {
  try {
    const data = await Post.findById(req.params.id).populate('userId', 'firstName lastName email');
    if (!data) return res.status(404).json({ message: 'Post no encontrado' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new post
router.post('/', async (req, res) => {
  const item = new Post(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) a post by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedItem) return res.status(404).json({ message: 'Post no encontrado' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Post.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Post no encontrado' });
    res.json({ message: 'Post eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;