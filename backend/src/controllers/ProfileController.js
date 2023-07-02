const { update } = require('../database/connection');
const connection = require('../database/connection');
const { index } = require('./UsersController');

module.exports = {
    async index(req,res) {

        const user_id = req.headers.authorization;

        const dutys = await connection('tarefas')
            .where('user_id',user_id)
            .select('*');

        if(dutys.length == 0) {
            return res.status(401).json({message: 'There is no dutys created'})
        }

        return res.json(dutys);
    },

    //Atualizar a senha do usuario

    async update(req,res) {
        const id = req.headers.authorization
        const { novo_id, newName } = req.body;

        // if(!id){
        //     return res.status(401).send('Operação não realizada')
        // }
        const response = await connection('tarefas')
        .where({user_id:id})
        .update({
            id: novo_id,
            name: newName
        });

        if(response == 1) {
            console.log('Deu certo');
        }

        console.log( id,response);

        return res.json(response)
    }

}