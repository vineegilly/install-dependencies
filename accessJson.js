var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('../requirements.json', 'utf8'));
var child;
var exec = require('child_process').exec;

Object.keys(obj.Dependencies).forEach(function(key) {
   // console.log(key+'=='+obj.Dependencies[key]);
child = exec("pip install "+key+'=='+obj.Dependencies[key], function (error) {
  if (error !== null) {
    console.log(key);
  }else{
    console.log("success");
  }
});

});