const connection = require('../database/connection');
const { create } = require('./UsersController');

module.exports = {
    async create(req,res) {
        const { id } = req.body;

        const user = await connection('users')
            .where('id',id)
            .select('name','lastname')
            .first()

        if(!user){
            return res.status(401).json({message: 'No user with this ID,please try again o make an account'})
        }

        return res.json(user)
    }
}