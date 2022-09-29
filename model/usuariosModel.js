var pool = require('./bd');

var md5 = require('md5');

async function getUserandPassword(user,password){
    try{
        var query = 'select * from usuarios where usuario = ? and contraseña = ? limit 1 '; // limit 1 me trae solo un reg//
        var rows = await pool.query(query,[user,md5(password)]);
        return rows[0] // el 0 me trae solo 1 reg//

    }catch(error){
        throw error
    }
}

module.exports= {getUserandPassword}