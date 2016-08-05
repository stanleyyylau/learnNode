To use your new module in your original program file, use the require()
call in the same way that you require('fs') to load the fs module. The
only difference is that for local modules must be prefixed with './'. So,
if your file is named mymodule.js then:

   var mymodule = require('./mymodule.js')

The '.js' is optional here and you will often see it omitted.

You now have the module.exports object in your module assigned to the
mymodule variable. Since you are exporting a single function, mymodule is
a function you can call!

Also keep in mind that it is idiomatic to check for errors and do
early-returns within callback functions:

   function bar (callback) {
     foo(function (err, data) {
       if (err)
         return callback(err) // early return

       // ... no error, continue doing cool things with `data`

       // all went well, call callback with `null` for the error argument

       callback(null, data)
     })
   }  
