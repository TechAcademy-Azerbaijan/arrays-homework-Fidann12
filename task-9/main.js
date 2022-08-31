const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let arr = [];
    for(i=0 ; i< n .length ; i++){
        arr.unshift(n[i])
    }
    console.log(arr.join(" "));
});
