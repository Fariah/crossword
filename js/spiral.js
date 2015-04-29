/*
Author: Sergey B.
Author URL:
*/

function change_direction(cur) {
    var result = 'right';

    switch (cur) {
        case 'right':
            result = 'down';
            break
        case 'down':
            result = 'left';
            break
        case 'left':
            result = 'up';
            break
        case 'up':
            result = 'right';
            break
        default:
            result = 'right';
    }
    return result;
}

function spiral_create(num, padding) {
    var number = 1;
    var left_style = 0;
    var top_style = 0;


    for( var t = num; t > 0; t--) {
        left_style = left_style + padding;
        top_style = top_style;
        $('#Spiral').append('<div class="block" style="left:' + left_style + 'px; top: ' + top_style + 'px;">' + number + '</div>');
        number++;
    }

    var dir = 'right'


    for(var i = num-1; i > 0; i--) {

        dir = change_direction(dir);

        for(var y = i; y > 0; y--) {
            switch (dir) {
                case 'right':
                    left_style = left_style + padding;
                    top_style = top_style;
                    break
                case 'down':
                    left_style = left_style;
                    top_style = top_style + padding;
                    break
                case 'left':
                    left_style = left_style - padding;
                    top_style = top_style;
                    break
                case 'up':
                    left_style = left_style;
                    top_style = top_style - padding;
                    break
            }
            $('#Spiral').append('<div class="block" style="left:' + left_style + 'px; top: ' + top_style + 'px;">' + number + '</div>');

            number++;
        }

        dir = change_direction(dir);

        for(var u = i; u > 0; u--) {
            switch (dir) {
                case 'right':
                    left_style = left_style + padding;
                    top_style = top_style;
                    break
                case 'down':
                    left_style = left_style;
                    top_style = top_style + padding;
                    break
                case 'left':
                    left_style = left_style - padding;
                    top_style = top_style;
                    break
                case 'up':
                    left_style = left_style;
                    top_style = top_style - padding;
                    break
            }
            $('#Spiral').append('<div class="block" style="left:' + left_style + 'px; top: ' + top_style + 'px;">' + number + '</div>');
            number++;
        }
    }
}