const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

  let n = result.input.split(" ");
  let max = parseInt(n[0]);
  let index = 0;
  for (let i = 0; i < n.length; i++) {
    const element = parseInt(n[i]);

    if (element >= max) {
      max = element;
      index = i;
    }
  }
  console.log(`${max}\n${index+1}`)

});
