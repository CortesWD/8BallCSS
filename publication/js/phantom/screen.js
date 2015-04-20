var async = require('async'),
    sizes = [
        [320, 480],
        [320, 568],
        [600, 1024],
        [1024, 768],
        [1280, 800],
        [1440, 900]
    ];

function capture(sizes, callback) {
    var page = require('webpage').create();
    page.viewportSize = {
        width: sizes[0],
        height: sizes[1]
    };
    page.zoomFactor = 1;
    page.open('http://www.amatuvida.com.co/', function (status) {
        var filename = sizes[0] + 'x' + sizes[1] + '.png';
        page.render('./publication/screenshot/' + filename);
        page.close();
        callback.apply();
    });
}

async.eachSeries(sizes, capture, function (e) {
    if (e) console.log(e);
    console.log('tones!');
    phantom.exit();
});