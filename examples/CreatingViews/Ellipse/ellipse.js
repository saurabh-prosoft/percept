var canvas = new Percept.Canvas(document.getElementById('canvas'));

var ellipse = new Percept.View.Ellipse(
    'ellipse',
    new Percept.Vector(canvas.width * .33, canvas.height / 2),
    30, 50,
    {
        fill: true,
        fillColor: 'pink',
        shadowColor: 'black',
        shadowBlur: 3
    }
);

var circle = new Percept.View.Ellipse(
    'circle',
    new Percept.Vector(canvas.width * .66, canvas.height / 2),
    25, 25,
    {
        fill: true,
        outline: true,
        fillColor: 'purple',
        outlineColor: 'green'
    }
);

var drawing = new Percept.Drawing(canvas);
drawing.add(ellipse);
drawing.add(circle);
canvas.draw(drawing);
