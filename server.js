/********************************************************************************** 
 * WEB322 – Assignment 02* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
 * * of this assignment has been copied manually or electronically from any other source* 
 * (including 3rd party web sites) or distributed to other students.*
 * * Name: _________Karl Andrei Diola_____________ Student ID: ______146937222________ Date: ______2023-10-01__________*
 * * Online (Cyclic) Link:
 * *********************************************************************************/

var express = require("express");

var path = require("path");


var dataservice = require("./data-service.js");

var app = express();
 

var HTTP_PORT = process.env.PORT || 8080;

// app.use(function (req, res) {
//   res.status(404).sendFile(path.join(__dirname,"/views/error404.html"));
// });

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/views/home.html"));
  });

app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname,"/views/about.html"));
  });

app.get("/vehicles", function(req, res){
  dataservice.getAllVehicles().then((data)=>{
      res.json(data);
  }).catch((error)=>{
      res.json({message, error})
  });
  
});

app.get("/vehicles2023", function(req,res){
 dataservice.get2023Vehicles().then(function(data){
      res.json(data);
 }).catch(function(err){
     res.json({message: err});
 });
});

app.get("/brands", function(req,res){
  
  dataservice.getBrands().then(function(data)
  {


      res.json(data);
  }).catch(function(err){
      res.json({message: err});
  });
 
});

app.use(express.static('public'));

function onHttpStart() 
{

  console.log("Express http server listening on "+ HTTP_PORT);
  return new Promise(function(resolve, reject){


      dataservice.initialize().then(function(value){
          console.log(value);

      }).catch(function(re){
              console.log(re);
          });
  });

}

app.listen(HTTP_PORT, onHttpStart);