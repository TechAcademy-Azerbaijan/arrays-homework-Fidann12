const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let n = result.input.split(" ");
    let arr = []
    for (let i = 0; i < n.length - 1; i++) {
        const element = parseInt(n[i]);
        next_element = parseInt(n[i + 1]);
        if (element < next_element) {
            arr.push(next_element)
        }
    }
    console.log(arr.join(" "));

});
