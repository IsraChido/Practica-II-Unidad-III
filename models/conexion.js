const mysql = require('mysql2');
var sqlConnection = mysql.createConnection({
    host: "3.141.144.75",
    user: 'root',
    database: 'sistemaIsra',
    password: 'Francisco-7'
});
sqlConnection.connect(function(err){
    if(err){
        console.log(err.message)
    }else{
    console.log("Conexion exitosa");
    }
});
module.exports=sqlConnection;