# queueNode
Aplicação responsável por enviar um e-mail para o usuário através de uma Queue 

Para testar basta rodar: 

1 - yarn, para adicionar todas as dependencias.

2 - yarn dev.  Isso irá executar tanto nosso servidor local (server.js) quanto nossa fila (queue.js), usando uma dependencia chamada 'npm-run-all'.

3 - Configure o email que quer enviar la na RegistrationMail.js

4 - Faça um POST na rota /users, passando um json com {name, email, password}
