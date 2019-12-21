var a = document.getElementsByClassName("goods-list")[0];
var b = a.getElementsByClassName("goods-item");
var data = [];
for (let i = 0, len = b.length; i < len; i++) {
    var obj = {};
    obj.title = b[i].getElementsByClassName("title")[0].innerText;
    obj.priceA = b[i].getElementsByClassName("price")[0].innerText;
    obj.priceB = b[i].getElementsByClassName("price")[0].getElementsByTagName("del")[0] ? b[i].getElementsByClassName("price")[0].getElementsByTagName("del")[0].innerText : "";
    obj.src = [b[i].getElementsByTagName("img")[0].src];
    obj.imgs = [b[i].getElementsByTagName("img")[0].src];
    data.push(obj);
}
console.log(JSON.stringify(data));
var data = [