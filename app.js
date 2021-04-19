const input = document.getElementById('input');
const output = document.getElementById('out');

var sum = 0;
function calculate() {
    var masterstring = ' abcdefghijklmnopqrstuvwxyz';
    var txt = input.value;
    var lowtxt = txt.toLowerCase();

    for (var i = 0; i < lowtxt.length ; i++){
        sum += masterstring.indexOf(lowtxt.charAt(i));
    }
    output.innerHTML = "Sum = " + sum;
    console.log(sum);
    sum = 0;
    console.log(lowtxt);
}