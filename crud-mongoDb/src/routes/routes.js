const {Router} = require('express')
const {userAll,userCreate,userById,userUpdate,userDelete} = require('../controllers/userController')
const {register,login,logout} = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = Router()

router.get('/users', authMiddleware, userAll)
router.post('/users', userCreate)
router.get('/users/:id', userById)
router.put('/users/:id', userUpdate)
router.delete('/users/:id', userDelete)


// rota de login
router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)


module.exports = router



