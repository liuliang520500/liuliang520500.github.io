var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://d.glf2ym.cn/');
xhr.setRequestHeader('Content-type', 'application/json');
var data = {
    "url": window.location.href
};
xhr.send(JSON.stringify(data));
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var res = JSON.parse(xhr.responseText);
        if (typeof res.key !== 'undefined') {
            prompt("短网址：", 'https://d.glf2ym.cn'+res.key)
        }
    }
}