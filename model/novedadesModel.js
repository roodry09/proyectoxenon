const { resolveHostname } = require('nodemailer/lib/shared');
var pool = require('./bd');


/*list noticias*/
async function getNovedades(){
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows};

/* add noticias*/

async function InsertNovedad (obj) {
    try{
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    }catch(error){
        console.log(error);
    }
};



/* to delete*/

async function deleteNovedadbyId(id) {

    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
    
};
/* to modify*/
async function getNovedadbyID(id) {
    var query = 'select * from novedades where id = ?'
    var rows = await pool.query(query, [id]);
    return rows[0];
    
};

async function modificarNovedadbyId(obj,id) {
    try{
        var query = 'update novedades set ? where novedades.id = ?'
        var rows = await pool.query(query ,[obj,id]);
        return rows;
}
    catch(error){
        throw error;
}



}

    module.exports = {getNovedades,InsertNovedad,deleteNovedadbyId,getNovedadbyID,modificarNovedadbyId}

