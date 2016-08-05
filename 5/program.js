var mymodule = require("./cool.js");
var path = require("path");

var dir = process.argv[2];
var fileExten = process.argv[3];




mymodule(dir, fileExten, function(err, list){
  if(err){
    console.log("fail loading the file");
  }
  if(list){
    var allExtensionFiles = [];
    for (var i = 0; i < list.length; i++){
        var temp = path.extname(list[i]);
        if (temp.slice(1)===fileExten){
            allExtensionFiles.push(list[i]);
        }

    }
    for(var ii = 0 ; ii < allExtensionFiles.length; ii++){
        console.log(allExtensionFiles[ii]);
    }
  }
});

--------------------------------------------------------------
module.exports = function (dir, fileExten, callback){

    fs.readdir(dir, function(err, list){
      if(err) {
        return callback(err);
      }else {
        return callback(null,list);
      }

});





mymodule(dir, fileExten, function(err, list){
    if(err){
        console.log("fail reading the file");
    }
    else{
        var allExtensionFiles = [];
        for (var i = 0; i < list.length; i++){
            var temp = path.extname(list[i]);
            if (temp.slice(1)===fileExten){
                allExtensionFiles.push(list[i]);
            }

        }
        for(var ii = 0 ; ii < allExtensionFiles.length; ii++){
            console.log(allExtensionFiles[ii]);
        }
    }
});



-------------------------------------
module.exports = function (dir, fileExten, callback){

    fs.readdir(dir, function(err, list){
      if(err) {
        return callback(err);
      }else {
        return callback(null,list);
      }

});
