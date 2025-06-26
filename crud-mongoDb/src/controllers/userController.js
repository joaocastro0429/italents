// src/controllers/userController.js
const User = require('../models/UserShema'); // Use apenas UMA importação

// GET /users → Listar todos os usuários
const userAll = async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    });
  }
}

// POST /users → Criar um novo usuário
const userCreate = async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  const saved = await user.save();
  res.status(201).json(saved);
}

const userById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    });
  }
}
const userUpdate = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email },

    )
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
// DELETE /users/:id → Deletar um usuário
const userDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
module.exports = {
  userAll,
  userCreate,
  userById,
  userUpdate,
  userDelete
}
