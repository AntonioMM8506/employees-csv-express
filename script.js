//Antonio Maldonado
//script.js

//Modules
const express = require('express')
const fs = require('fs')

//nitiializes the application
const app = express()

//Args
const file = process.argv.slice(2)
const index = process.argv.slice(3)
const field = process.argv.slice(4)

//Path declaration, it depends if there are 4 or 5 arguments
var path = ""
field[0]==undefined ? path="/employee/:"+index[0] : path="/employee/:"+index[0]+"/:"+field[0];

//Launches the application on the composed path and with a callback function
app.get(path, function(req, res) {

  //Reads the specified file as an argument
  fs.readFile(file[0], 'utf8', function(err, data) {
    //If there's an error with the file it will show its
    //corresponding message
    if (err) {
      console.error(err.message)
    }

    //The index argument is needed
    if(index[0] == undefined)
    {
	    console.log("Argument index missed")
    }
    
    //Splits the data of the csv in order to manipulate it as rows, then
    //the lines array is splited once again in order to generate a map
    //with its corresponding headers
    var lines = data.split("\n")
    var headers = lines[0].split(",")
    var maps = lines.slice(1).map( line => line.split(",").reduce((obj, val, i) => Object.assign({ [headers[i]]: val }, obj) , {}) );
    
    //If the 5th parameter, the one about the field, is empty, just go ahead and 
	  //displays the whole row according to the index, but if is not undefined, look
	  //after the coincidence in the map.
    result_all = maps[index[0]-1]
    obj = {}
    result_field = Object.assign({[field[0]]: result_all[field[0]]},obj)

    field[0]==undefined ? res.json(result_all):res.json(result_field);
    //res.json(result_all)

  })//End of fs.readFile

})//End of app.get

//Launches the application in the given port and, in the console
//will display a message
app.listen(3000, function() {
  console.log('application started.')
  
})//End of app.listen
