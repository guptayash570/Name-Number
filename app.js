const input = document.getElementById('input');
const output = document.getElementById('out');
var sum = 0;
function calculate() {
    var masterstring = ' abcdefghijklmnopqrstuvwxyz';
    const opt = document.getElementById('option').value;
    var txt = input.value;
    var lowtxt = txt.toLowerCase();

    if ( opt == 'a1'){
    for (var i = 0; i < lowtxt.length ; i++){
        sum += masterstring.indexOf(lowtxt.charAt(i));
        }
    }
    else if ( opt == 'a0'){
        for (var i = 0; i < lowtxt.length ; i++){
            sum += masterstring.indexOf(lowtxt.charAt(i)) -1 ;
            }
        
    }
    output.innerHTML = "Sum = " + sum;
    sum = 0;
    
}