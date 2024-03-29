var canvas = new Percept.Canvas(document.getElementById('canvas'));

var line1 = new Percept.View.Line(
    'line1',
    new Percept.Vector(canvas.width * .3, canvas.height / 2),
    new Percept.Vector(canvas.width * .4, canvas.height / 2),
    0,
    { color: 'red'}
);

var line2 = new Percept.View.Line(
    'line2',
    new Percept.Vector(canvas.width * .7, canvas.height / 2),
    new Percept.Vector(canvas.width * .8, canvas.height / 2),
    0.5,
    { color: 'green'}
);

var drawing = new Percept.Drawing(canvas, () => {
    line1.localRotation += .5;
    line2.localRotation += .5;

    Percept.Debug.debugPoint('line1Pivot', drawing, line1.absolutePosition, {color: 'blue'});
    Percept.Debug.debugPoint('line2Pivot', drawing, line2.absolutePosition, {color: 'blue'});
});

drawing.add(line1);
drawing.add(line2);
canvas.draw(drawing);
