const {Router} = require('express')
const {userAll,userCreate,userById,userUpdate,userDelete} = require('../controllers/userController')

const router = Router()

router.get('/users', userAll)
router.post('/users', userCreate)
router.get('/users/:id', userById)
router.put('/users/:id', userUpdate)
router.delete('/users/:id', userDelete)


module.exports = router



