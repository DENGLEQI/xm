$(() => {
    // 轮播图
    class Lbt {
        constructor(options) {
            this.selector = options.el;
            this.el = document.querySelector(options.el);
            this.imgList = options.imgList;
            this.time = options.time;
            this.init();
            this.index = 0; // 当前显示的页面索引
        }
        init() {
            this.renderCSS(this.selector);
            this.renderHTML();
            this.addEvent();
        }
        renderCSS(selector) {
            let css = `a {
                text-decoration: none;
            }
            ol li,
            ul li {
                list-style: none;
            }
            ${selector} {
                position: relative;
            }
            // box
            ${selector} .img-box {
                height: 460px;
                width:1260px;
                background:pink;
                margin:0 auto;
                position: relative;
            }
            ${selector} .img-box li {
                height: 100%;
                width: 100%;
                position: absolute;
                transition: all 1s;
                opacity: 0;
                font-size: 50px;
            }
            ${selector} .img-box li img {
                height: 100%;
                width: 100%;
            }
            ${selector} .img-box li.active {
                z-index: 1;
                opacity: 1;
            }
            ${selector} .img-box a {
                display: block;
                font-size: 60px;
                line-height: 600px;
                text-align: center;
            }
            ${selector} .list-box {
                position: absolute;
                right: 30px;
                bottom: 20px;
                z-index: 2;
            }
            ${selector} .list-box li {
               
                width: 6px;
                height: 6px;
                border: 2px solid #fff;
                border-color: #a4b3b8;
                border-radius: 10px;
                overflow: hidden;
                background: rgba(0,0,0,.4);
                margin: 0 4px;
                float: left;
            }
            ${selector} .list-box li:last-child {
                margin-right: 0;
            }
            ${selector} .box-btn div {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 2;
            }
            ${selector} .box-btn-left {
                left: 234px;
                width: 41px;
                height: 69px;
                background: url(../img/lbt.png) no-repeat;
                background-position: -84px 0px;
                display: inline-block;
            }
            ${selector} .box-btn-left:hover{
                background: url(../img/lbt.png) no-repeat;
                background-position: 0px 0px;
            }
            ${selector} .box-btn-right {
                right: 0;
                width: 41px;
                height: 69px;
                background: url(../img/lbt.png) no-repeat;
                background-position: -123px 0px;
                display: inline-block;
            }
            ${selector} .box-btn-right:hover{
                background: url(../img/lbt.png) no-repeat;
                background-position: -42px 0px;
            }
            ${selector} .list-box li.active {
                background: #e2f8ff;
                border-color:#889599;
            }`;
            let style = document.createElement("style");
            style.innerHTML = css;
            document.head.appendChild(style);
        }
        renderHTML() {
            let { el, imgList } = this;
            let lis = imgList.map((item, index) => {
                return `<li class="${index ? "" : "active"}"><img src="${item}" alt="" /></li>`
            }).join("");
            let roundList = imgList.map((item, index) => {
                return `<li class="${index ? "" : "active"}"></li>`
            }).join("");

            el.innerHTML = `
            <ul class="img-box">${lis}</ul>
            <ul class="list-box">${roundList}</ul>
            <div class="box-btn">
                    <div class="box-btn-left"></div>
                    <div class="box-btn-right"></div>
            </div>`;
        }
        animate(index) {
            let { imgLi, roundList } = this;
            for (let i = 0; i < imgLi.length; i++) {
                imgLi[i].classList.remove("active");
                roundList[i].classList.remove('active');
            }
            roundList[index].classList.add('active');
            imgLi[index].classList.add('active');
        }
        qie(val) {
            if (val == "next" && ++this.index == this.imgList.length) this.index = 0;
            if (val == "prev" && --this.index == -1) this.index = this.imgList.length - 1;
            this.animate(this.index);
        }
        autoplay() {
            this.timer = null;
            this.timer = setInterval(() => this.qie("next"), this.time);
            this.el.onmouseenter = () => clearInterval(this.timer);
            this.el.onmouseleave = () => this.timer = setInterval(() => this.qie("next"), this.time);
        }
        addEvent() {
            let { el } = this;
            // 获取元素
            this.imgLi = el.querySelectorAll('.img-box li');
            this.roundList = el.querySelectorAll('.list-box li');
            this.prev = el.querySelector('.box-btn-left');
            this.next = el.querySelector('.box-btn-right');

            // 给左右按钮添加点击事件
            this.next.onclick = () => this.qie("next");
            this.prev.onclick = () => this.qie("prev");

            // 给小圆点添加点击事件
            for (let j = 0; j < this.roundList.length; j++) this.roundList[j].onclick = () => this.animate(this.index = j);
            this.autoplay();
        }
    }


    // 实例化轮播图
    new Lbt({
        el: "#box",
        imgList: ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a38b1d56409913d5dc869023ade36d94.jpg?w=2452&h=920", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6731e5a37682eec528729d7c05a9b581.jpg?w=2452&h=920", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54baecb497d800025619d0d4d38bfefd.jpg?w=2452&h=920", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab7a7193d6654d75fd3a2f41cccf23c9.jpg?w=2452&h=920", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f69f6975b7def933aa0856340df34548.jpg?w=2452&h=920"],
        time: 5000
    });
})