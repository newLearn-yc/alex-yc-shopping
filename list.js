window.onload = function () {
    //拿取元素
    var h1 = document.querySelector('#h1_click');
    var f_P = document.querySelector('#f_p');
    var s_P = document.querySelector('#s_p');


    var h1C = document.querySelector('.h1_click');
    var f_PC = document.querySelector('.f_p');
    var s_PC = document.querySelector('.s_p');

    // console.log(s_P);
    // console.log(f_P);
    // console.log(h1);
    //测试代码
    // console.log(f_P.innerText.slice(2, 3 + 1));
    // var index = 1;
    // f_P.innerHTML = f_P.innerText.slice(2, 3 + 1) * 1 + index * 1;
    // console.log(f_P.innerHTML);
    // s_P.innerHTML = s_P.innerText.slice(2, 3 + 1) * 1 - index * 1;
    // console.log(s_P);

    h1.addEventListener('click', function () {
        index = 1;
        re_fp = f_P.innerText.slice(2, 3 + 1) * 1 + index * 1;
        re_sp = s_P.innerText.slice(2, 3 + 1) * 1 - index * 1;

        f_P.innerHTML = '已售' + re_fp + '%'
        s_P.innerHTML = '剩余' + re_sp + '%'
        if (re_sp < 10) {
            h1.disabled = 'true';
            h1.innerHTML = '售 空！'
            h1.style.background = 'gray';
        }
    }, false);

    h1C.addEventListener('click', function () {
        index = 1;
        re_fp = f_PC.innerText.slice(2, 3 + 1) * 1 + index * 1;
        re_sp = s_PC.innerText.slice(2, 3 + 1) * 1 - index * 1;

        f_PC.innerHTML = '已售' + re_fp + '%'
        s_PC.innerHTML = '剩余' + re_sp + '%'
        if (re_sp < 10) {
            h1C.disabled = 'true';
            h1C.innerHTML = '售 空！'
            h1C.style.background = 'gray';
        }
    }, false);



    // //面向对象第一次
    // function a_click(h1, f_PC, s_PC) {
    //     index = 1
    //     re_fp = f_PC.innerText.slice(2, 3 + 1) * 1 + index * 1;
    //     re_sp = s_PC.innerText.slice(2, 3 + 1) * 1 - index * 1;
    //     f_PC.innerHTML = '已售' + re_fp + '%'
    //     s_PC.innerHTML = '剩余' + re_sp + '%'

    //     if (re_sp < 10) {
    //         h1.disabled = 'true';
    //         h1.innerHTML = '售 空！'
    //         h1.style.background = 'gray';
    //     }
    // }

    // //获取数据
    var fp3 = document.querySelector('#p3');
    var sp3 = document.querySelector('#p3-3');
    var h3 = document.querySelector('#h3');
    // a_click(h3, fp3, sp3);
    h3.addEventListener('click', function () {
        index = 1;
        re_fp = fp3.innerText.slice(2, 3 + 1) * 1 + index * 1;
        re_sp = sp3.innerText.slice(2, 3 + 1) * 1 - index * 1;

        fp3.innerHTML = '已售' + re_fp + '%'
        sp3.innerHTML = '剩余' + re_sp + '%'
        if (re_sp < 10) {
            h3.disabled = 'true';
            h3.innerHTML = '售 空！'
            h3.style.background = 'gray';
        }
    }, false);

    var fp4 = document.querySelector('#fp4');
    var sp4 = document.querySelector('#sp4');
    var h4 = document.querySelector('#h44');

    h4.addEventListener('click', function () {
        index = 1;
        re_fp = fp4.innerText.slice(2, 3 + 1) * 1 + index * 1;
        re_sp = sp4.innerText.slice(2, 3 + 1) * 1 - index * 1;

        fp4.innerHTML = '已售' + re_fp + '%'
        sp4.innerHTML = '剩余' + re_sp + '%'
        if (re_sp < 10) {
            h4.disabled = 'true';
            h4.innerHTML = '售 空！'
            h4.style.background = 'gray';
        }
    }, false);


    var fp5 = document.querySelector('#fp5');
    var sp5 = document.querySelector('#sp5');
    var h5 = document.querySelector('#h55');

    h5.addEventListener('click', function () {
        index = 1;
        re_fp = fp5.innerText.slice(2, 3 + 1) * 1 + index * 1;
        re_sp = sp5.innerText.slice(2, 3 + 1) * 1 - index * 1;

        fp5.innerHTML = '已售' + re_fp + '%'
        sp5.innerHTML = '剩余' + re_sp + '%'
        if (re_sp < 10) {
            h5.disabled = 'true';
            h5.innerHTML = '售 空！'
            h5.style.background = 'gray';
        }
    }, false);


    var fp6 = document.querySelector('#fp6');
    var sp6 = document.querySelector('#sp6');
    var h6 = document.querySelector('#h66');

    h6.addEventListener('click', function () {
        index = 1;
        re_fp = fp6.innerText.slice(2, 3 + 1) * 1 + index * 1;
        re_sp = sp6.innerText.slice(2, 3 + 1) * 1 - index * 1;

        fp6.innerHTML = '已售' + re_fp + '%'
        sp6.innerHTML = '剩余' + re_sp + '%'
        if (re_sp < 10) {
            h6.disabled = 'true';
            h6.innerHTML = '售 空！'
            h6.style.background = 'gray';
        }
    }, false);

}