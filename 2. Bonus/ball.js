// you work goes here
// -----------------------

width = 250;
height = 250;
var counter = 0;

while (counter < 4){
    var x = Math.floor(Math.random()*width);
    var y = Math.floor(Math.random()*height);

    var r = Math.floor(255*(Math.random()));
    var g = Math.floor(255*(Math.random()));
    var b = Math.floor(255*(Math.random()));        
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    create(x, y, color, 'ball' + counter);
    counter++;
}