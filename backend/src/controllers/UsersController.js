const connection = require('../database/connection');
const crypto = require('crypto');
const { update } = require('../database/connection');

module.exports = {
    async index(req,res) {
        const users = await connection('users').select('*');

        return res.json(users)
    },

    async create (req,res){
        const id = crypto.randomBytes(4).toString('HEX')
    
        const {name,lastname,age,contact} = req.body;
    
        await connection('users').insert({
            id,
            name,
            lastname,
            age,
            contact
        });
        
        console.log(req.body)
    
        return res.json({ id });
    },

}