const users = require('../models/db'); // Assuming you have a users.json file in the data folder


const getUsers = (req,res)=>{
    return res.status(200).json(users);
    
}

const createUser =(req,res)=>{
    const {name, email }= req.body
    const user ={
        id:users.length +1,
        name,
        email
    }
    console.log(users.length)
    users.push(user)
    return res.status(201).json(user);
}

const getUserId=(req,res)=>{
    const {id} = req.params

    const user = users.find(user=> user.id === parseInt(id) )
    if (!user){
        return res.status(404).json({
            message: 'User not found'
        })

        
    }
    return res.status(200).json(user);
}

const updateUser = (req,res)=>{
    const {id}= req.params
    const {name,email}= req.body

    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex >=0){
        users[userIndex].name = name;
        users[userIndex].email = email;
        return res.status(200).json(users[userIndex]);
    }
    return res.status(404).json({
        message: 'User not found'
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params;

    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex >= 0) {
        users.splice(userIndex, 1);
        return res.status(204).send(); // No content
    }
    return res.status(404).json({
        message: 'User not found'
    })
}

module.exports = {
    getUsers,
    createUser,
    getUserId,
    updateUser,
    deleteUser
}