var express = require('express');
var router = express.Router();
var novedadesModel = require('../model/novedadesModel');
var cloudinary = require ('cloudinary').v2;


/* GET home page. */
router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad => {
    if(novedad.img_id){
      const imagen = cloudinary.url(novedad.img_id,{
        height:250,

        crop:'pad',
      });
      return{
        ...novedad,
        imagen

      }
        }else{
        return{
          ...novedad,
          imagen: ''
        }
    }
  })

  res.render('Novedades', {
      isNovedades:true,
      novedades
  });
});

module.exports = router;
