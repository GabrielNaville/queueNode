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
        await Queue.add('RegistrationMail', { user });

        return res.json(user);
    }
}