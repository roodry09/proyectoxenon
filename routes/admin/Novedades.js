var express = require('express');
var router = express.Router();
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy =  util.promisify(cloudinary.uploader.destroy);

var novedadesModel = require('../../model/novedadesModel');


/* GET home page. */
router.get('/', async function(req, res, next) {


    var novedades = await novedadesModel.getNovedades();


    novedades = novedades.map(novedad => {
        if(novedad.img_id){
            const imagen = cloudinary.url(novedad.img_id,{
            height:75,
            width:75,
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
    
        res.render('admin/Novedades', {
        layout:'admin/layout',
        usuario: req.session.nombre,
        novedades
});
});

router.get('/agregar', (req,res,next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
})

router.post('/agregar', async (req,res,next) => {
    try{
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0 ) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            
        }

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "" ) 
        {
            await novedadesModel.InsertNovedad({
                ...req.body,
                img_id,

            });
            res.redirect('/admin/novedades');
        }else{
            res.render('admin/agregar',{
            layout:'admin/layout',
            error:true,
            message:'Se necesitan completar todos los datos'
        })
    }}
        catch (error)    {
        console.log(error);
        res.render('admin/agregar',{
            layout:'admin/layout',
            error:true,
            message:' No se cargo la novedad'
        })
    }
});

router.get('/eliminar/:id', async(req,res,next) => {
    var id = req.params.id;

    let novedades = await novedadesModel.getNovedadbyID(id);
    if (novedades.img_id) {
        await (destroy(novedades.img_id))
    }

await novedadesModel.deleteNovedadbyId(id);
    res.redirect('/admin/novedades');

});





router.get('/modificar/:id', async(req,res,next) =>{
    var id = req.params.id;
    var novedades= await novedadesModel.getNovedadbyID(id);
    res.render('admin/modificar', {
        layout:'admin/layout',
        novedades
    })
});


router.post('/modificar', async (req,res,next) => {
    try{
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1"){
            img_id = null;
            borrar_img_vieja = true;
        }else{
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (
                    await uploader(imagen.tempFilePath)
                ).public_id;
                borrar_img_vieja= true;
                
            }
        
        }
            if (borrar_img_vieja && req.body.img_original) {
                await (destroy(req.body.img_original));
                
            }
        var novedades = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
        }
        console.log(novedades);
        await novedadesModel.modificarNovedadbyId(novedades, req.body.id);
        res.redirect('/admin/novedades');
    }
    catch(error) {
        console.log(error)
        res.render('admin/modificar', {
            layout:'admim/layout',
            error:true,
            message:'No se modificó la noticia'

        })
    }
})


module.exports = router;
