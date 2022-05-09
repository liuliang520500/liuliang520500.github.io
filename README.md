# shortUrl.github.id
# 淘宝客专用网址缩短工具
1. 短网址永久有效
2. 不限访问频次
3. API文档：
4. POST请示
5. Content-Type: application/json
6. body：{"url":"http://bbs.weiququ.cn"}
7. 请求接口：http://d.glf2ym.cn/
8. 得到KEY
9. shortUrl:d.glf2ym.cn/{key}
10. 有问题联系客服：2072803280
11. bbs.weiququ.cn
12. 油猴安装地址：https://greasyfork.org/zh-CN/scripts/443864-tk%E7%9F%AD%E7%BD%91%E5%9D%80

收藏夹脚本：
```javascript
javascript:var xhr=new XMLHttpRequest();xhr.open("POST","https://d.glf2ym.cn/");xhr.setRequestHeader("Content-type","application/json");var data={url:window.location.href};xhr.send(JSON.stringify(data));xhr.onreadystatechange=function(){if(xhr.readyState==4&&xhr.status==200){var res=JSON.parse(xhr.responseText);if(typeof res.key!=="undefined"){prompt("短网址：","https://d.glf2ym.cn"+res.key)}}};
```

