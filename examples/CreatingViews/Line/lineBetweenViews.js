var canvas = new Percept.Canvas(document.getElementById('canvas'));

var rectangle1 = new Percept.View.Rectangle('rect1', new Percept.Vector(canvas.width / 2, canvas.height / 2), 15, 15, {
    fill: true, fillColor: 'red'
});
var rectangle2 = new Percept.View.Rectangle('rect2', new Percept.Vector(100, 0), 15, 15, {
    fill: true, fillColor: 'green'
});

rectangle2.parent = rectangle1;

var line = new Percept.View.Line('myLine', rectangle1, rectangle2, 0, {
    color: 'blue',
    width: 3
});

var drawing = new Percept.Drawing(canvas, () => {
    rectangle2.rotation += .2;
});

drawing.add(rectangle1);
drawing.add(line);
canvas.draw(drawing);
