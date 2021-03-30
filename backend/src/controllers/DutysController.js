const connection = require('../database/connection');

module.exports = {
    async index(req,res) { 
        const { page = 1 } = req.query;
        const [count] = await connection('tarefas').count();


        console.log(count);

        const dutys = await connection('tarefas')
            .join('users', 'users.id', '=', 'tarefas.user_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['tarefas.*','users.name','users.lastname','users.age','users.contact'])

        res.header('X-Total-Count',count['count(*)'])

        return res.json(dutys)

    },

    async create(req,res){
        const {title,difficulty,description,firstDate,date,times_per_week} = req.body;

        const user_id = req.headers.authorization
        
        const [id] = await connection('tarefas').insert({
            title,
            difficulty,
            description,
            firstDate,
            date,
            times_per_week,
            user_id
        })
        console.log(req.body)
        return res.json({id})
    },

    async delete(req,res) {
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const tarefas = await connection('tarefas')
        .where('id',id)
        .select('user_id')
        .first();

        if(tarefas.user_id !== user_id){
            return res.status(401).json({message: 'Não permitido'})
        }

        await connection('tarefas').where('id',id).delete();

        return res.status(200).send('Tudo ok');

    }
}