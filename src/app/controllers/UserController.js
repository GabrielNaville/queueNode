import Mail from '../lib/Mail';
import Queue from '../lib/Queue'

export default {
    //Cadastrando Usuario
    async store(req, res) {
        const {name, email, password} = req.body;

        const user = {
            name,
            email,
            password
        };

        //Adicionando job que enviara o email há uma fila
        await Queue.add({ user });
        //Isso adiciona há filá mas não estamos processando de fato essa fila

        return res.json(user);
    }
}