const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n =result.input.split(" ");
    let arr=[];
    for(i=0 ; i<n.length ; i+=2){
        const element=parseInt(n[i]);
         const next_element =parseInt(n[i+1]);
        if(next_element){
            arr.push(next_element)
        }
        arr.push(element)
    }
  console.log(arr.join(" "));
});
