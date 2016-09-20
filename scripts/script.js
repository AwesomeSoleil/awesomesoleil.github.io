$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var circle = Shape.Circle(event.point.x, event.point.y, 20);
        circle.fillColor = 'magenta';
    };    
    paper.view.draw();
});
