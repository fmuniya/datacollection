const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host:"localhost",
     user:"root",
     password:"",
     database:"seodb",
     connectionLimit: 10
})

mysqlConnection.connect((err)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

