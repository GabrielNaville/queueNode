import Mail from '../lib/Mail';

//Enviando um email

export default {
    //nome do job para identificação, caso falhe
    key: 'RegistrationMail',
    //Oque o Job deve fazer
    async handle({ data }) {

        const{user} = data;
        await Mail.sendMail({
            from: 'Susana Naville <susananaville1@gmail.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuario',
            html: `Olá ${user.name}, Seja bem vindo!`
        });
    },
}