const userShema = require('../models/UserShema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Chave secreta do .env
const SECRET_KEY = process.env.JWT_TOKEN_SECRET || 'chave_secreta_padrao';

// REGISTRO DE USUÁRIO
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await userShema.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: 'Email já registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userShema({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    return res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao registrar',
      error: error.message,
    });
  }
};

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userShema.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Debug: verificar se user.password existe
    if (!user.password) {
      return res.status(500).json({ message: 'Senha do usuário não encontrada no banco' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });

    return res.status(200).json({
      message: 'Login realizado com sucesso',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro no login',
      error: error.message,
    });
  }
};


// LOGOUT (cliente apaga o token)
const logout = async (req, res) => {
  return res.status(200).json({ message: 'Logout realizado com sucesso' });
};

module.exports = {
  register,
  login,
  logout,
};
