
var fs = require("fs");




module.exports = function(dir, fileExten, fn){
    fs.readdir(dir, fn);
}



//this is the function that gets called

module.exports = function (dir, fileExten, callback){

    fs.readdir(dir, function(err, list){
      if(err) {
        return callback(err);
      }else {
        return callback(null,list);
      }

});























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
