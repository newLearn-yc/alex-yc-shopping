window.onload = function () {
    //引入元素
    var input = document.querySelector('#inp');


    //编写事件
    input.addEventListener('focus', function () {
        input.placeholder = '';
    }, false)

    input.addEventListener('blur', function () {
        input.placeholder = '请搜索内容...';
    }, false)


    //轮播图
    // var imgs = document.querySelectorAll('#img_1');
    // var li = document.querySelector('#li_1');
    // //拿两个按钮
    // var btnLeft = document.querySelector('#left-btn');
    // var btnRight = document.querySelector('#right-btn');

    // li.addEventListener('mouseover', function () {
    //     btnLeft.style.display = 'block';
    //     btnRight.style.display = 'block';
    // }, false);

    // li.addEventListener('mouseout', function () {
    //     btnLeft.style.display = 'none';
    //     btnRight.style.display = 'none';
    // }, false);


    //轮播图核心
    // var index = 1;
    // var w = li.offsetWidth;
    // //定义轮播第一张图片的起始位置
    // btnRight.addEventListener('click', function () {
    //     imgs.style.transform = w * index + 'px';
    // }, false);



    //左侧导航栏位置变化
    var a_1 = document.querySelector('#a1');
    var a_2 = document.querySelector('#a2');
    var a_3 = document.querySelector('#a3');
    var a_5 = document.querySelector('#a5');
    //侧边栏一行
    var cbl = document.querySelector('.floor');
    var cbl_r = document.querySelector('.floor-right');

    //拿每个模块的高
    var nav = document.querySelector('.nav');
    var jydq = document.querySelector('.div-left');
    var sjtx = document.querySelector('#sj_1');
    var buttom = document.querySelector('.sp_content_1');

    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset >= nav.offsetTop) {
            cbl.style.display = 'block'
            cbl_r.style.display = 'block'
        } else {
            cbl.style.display = 'none'
            cbl_r.style.display = 'none'
        }
    }, false);


    a_1.addEventListener('click', function () {
        window.scroll(0, 0);
    }, false);

    a_2.addEventListener('click', function () {
        window.scroll(0, jydq.offsetTop);
    }, false);

    a_3.addEventListener('click', function () {
        window.scroll(0, sjtx.offsetTop);
    }, false);

    a_5.addEventListener('click', function () {
        window.scroll(0, buttom.offsetTop);
    }, false);


    //轮播图
    //获取元素
    // var lis = document.querySelector('#li_1');
    // var imgs = lis.querySelectorAll('img');
    // console.log(imgs);
    // var box = document.querySelector('.focus');
    // var box_w = box.offsetWidth;
    // // console.log(box_w)
    // //设置移动距离
    // var box_w_f = box_w / 2;
    // // console.log(box_w_f);
    // var index_imgs

}
