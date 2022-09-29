var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer'); // send mail

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('Contacto', {
        isContacto:true
});
});

router.post('/', async(req, res, next)=>{
    console.log(req.body);
    var firstname = req.body.firstname;
    var mail = req.body.mail;
    var Asunto = req.body.Asunto;
    var mensaje = req.body.mensaje;

    var obj = {

        to:'rodrigolonginotti@gmail.com',
        subject:'Contacto de Xenon Web',
        html: firstname + ' se contacto  con el asunto'+ Asunto + ' con su correo ' + mail + '  , <br> Hizo el siguiente comentario' + mensaje,
    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

        var info = await transport.sendMail(obj);
        res.render('Contacto',{
        isContacto:true,
        message : ' mensaje enviado'

});

});



module.exports = router;
