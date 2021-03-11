
// const {
//     createPool
//  } = require('mysql');

//  const pool = createPool({
//      host:"localhost",
//      user:"root",
//      password:"",
//      database:"seodb",
//      connectionLimit: 10
//  })

//  pool.query('select * from collecteddata',(err, result, fields)=>{
//      if(err){
//          return console.log(err);
//      }
//      return console.log(result);
//      return console.log('DB connection successful');
//  })

// #############     NEW CONNECTION      #####################
// use import format

var mysql = require('mysql');
var express = require('express')
var app = express();

app.get('/' , function(request, response){
    fetchData(response);
    console.log('Done. Displayed Data!!');
});

// db connection 

var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"seodb",
    connectionLimit: 10

})



db.connect (function(err){
    if (err) {throw err;}
    console.log("connected to DB!!")
})

// ####################   Functions   ########################

function executeQuery(sql, aa){
    db.query(sql, function(error, result, fields){
        if(error) {throw error;}
        aa(result);
    })
}


//  fetch() getting only selected fields for test

function fetchData(response){
    executeQuery("select 'domain_id', 'top_level_domain', 'webmaster_email', 'contacted_by', 'date_of_contact', 'domain_language' from collecteddata", function(result){
        console.log(result);
        response.write('<table><tr>');
        for (var column in result[0]){
           response.write('<td><label>' + column + '</label><td>');
           response.write('<tr>');
        }
        for(var row in result){
            response.write('<tr>')
            for (var column in result[row]){
                response.write('<td><label>' + result[row][column] + '</label></td>');
            }
            response.write('</tr>')
        }
        response.end('</table>')
    })
}


// #############################   Function End   #################################

app.listen(8080, function(){
    console.log('listening to port 8080');
})