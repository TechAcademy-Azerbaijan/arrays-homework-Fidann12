const { off } = require('process');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  let n = result.input.split(" ");
  let arr = [];
  for (i = 0; i < n.length; i++) {
    if (i % 2 == 0) {
      arr.push(parseInt(n[i]))
    }
  }
  console.log(arr.join(" "));

});
