var T = { "apiUrl": "https:\/\/edit.telegra.ph", "datetime": 0, "pageId": 0 };
(function () {
    var b = document.querySelector('time');
    if (b && T.datetime) {
        var a = new Date(1E3 * T.datetime), d = 'January February March April May June July August September October November December'.split(' ')[a.getMonth()], c = a.getDate();
        b.innerText = d + ' ' + (10 > c ? '0' : '') + c + ', ' + a.getFullYear()
    }
})();