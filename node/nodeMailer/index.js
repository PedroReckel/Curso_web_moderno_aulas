const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
        user: 'meuEmail@gmail.com',
        pass: 'minhaSenha',
    }
})

transport.sendMail({
    from: ' <meuEmail@gmail.com>',
    to: 'emaildoMeuAmigo@gmail.com',
    subject: 'Enviando e-mail com Nodemailer',
    html: '<h1>Olá, Pedro</h1> <p>Estou enviando outro E-mail para você com Node.js usando uma biblioteca chamada Nodemailer!</p>',
    text: 'Olá, Dev! Esse email foi enviado usando o Nodemailer'
})
.then(() => console.log('E-mail enviado com sucesso!'))
.catch((err) => console.log(`Erro ao enviar E-mail: ${err}`))