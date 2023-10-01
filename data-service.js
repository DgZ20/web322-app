
const fs = require("fs");

var vehicles = [];
var brands = [];

module.exports.initialize = function (){
    return new Promise(function(resolve, reject){
        try{

            fs.readFile('./data/vehicles.json', 'utf8', (err, data)=>{
                if(err) throw err;
                vehicles = JSON.parse(data);
                
                console.log("Vehicles data read successfully")
            });
            fs.readFile('./data/brands.json', 'utf8',  (err, data)=>{
                if(err) throw err;
                brands = JSON.parse(data);
               
                console.log("Brands data read successfully")
            });

            
        }catch(ex){
            reject('Error file not read!');
        }

        resolve("File read successfully.")
    });
}


module.exports.getAllVehicles = function()
{
    var Allvehicles = [];
    return new Promise((resolve, reject) => 
    {
        for (var i = 0; i < vehicles.length; i++)
        {
            Allvehicles.push(vehicles[i]);
        }
        if (Allvehicles.length == 0)
        
            reject ("No data");
            resolve (Allvehicles);
        
    });
};

module.exports.get2023Vehicles = function ()
{
    var yvehicles= [];
    return new Promise ((resolve, reject) => {
        for (var i = 0; i < vehicles.length; i++)
        {
            if (vehicles[i].year === 2023)
            {
                yvehicles.push(vehicles[i]);
            }
        }
        if(yvehicles.length == 0)
        
        reject("No data");
        resolve (yvehicles);
    });
};

module.exports.getBrands= function(){
    return new Promise(function(resolve, reject){
       if(brands.length ==0){
           reject('No results returned!')
       }else{
           resolve(brands);
       }
    });
};