const {Router} = require('express')
const users = require('../models/db') // Assuming you have a users.json file in the data folder
const { 
    getUsers ,
    createUser,
    getUserId ,
    updateUser,
    deleteUser 
} = require('../controllers/usersController')

const router = Router()



router.get('/users', getUsers)  
router.post('/users', createUser)
router.get('/users/:id', getUserId)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)





module.exports = router