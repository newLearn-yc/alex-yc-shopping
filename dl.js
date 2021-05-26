window.onload = function () {
    // 设置正则表达式
    var regPhone = /^[a-z0-9_-]{3,16}$/;
    var regMsg = /^[a-z0-9_-]{3,16}$/;
    var regPwd = /^[a-z0-9_-]{6,18}$/;

    //拿取相关的元素
    var inputPhone = document.querySelector('#input_phone');
    var inputMsg = document.querySelector('#input_msg');
    var inputPwd = document.querySelector('#input_pwd');
    var input_second_check = document.querySelector('#input_second_check');

    var span = inputPhone.nextElementSibling;
    var span1 = inputMsg.nextElementSibling;
    var span2 = inputPwd.nextElementSibling;
    var span_ts = input_second_check.nextElementSibling;



    //检测test且切换类
    inputPhone.addEventListener('blur', function () {
        if (regPhone.test(inputPhone.value)) {
            span.innerHTML = '你输入的正确！'
            span.className = 'success'
        } else {
            span.innerHTML = '你输入的不符合要求！'
            span.className = 'error'
        }
    }, false);

    inputMsg.addEventListener('blur', function () {
        if (regMsg.test(inputMsg.value)) {
            span1.innerHTML = '你输入的正确！'
            span1.className = 'success'
        } else {
            span1.innerHTML = '你输入的不符合要求！'
            span1.className = 'error'
        }
    }, false);


    inputPwd.addEventListener('blur', function () {
        if (regPwd.test(inputPwd.value)) {
            span2.innerHTML = '你输入的正确！'
            span2.className = 'success'
        } else {
            span2.innerHTML = '你输入的不符合要求！'
            span2.className = 'error'
        }
    }, false);

    input_second_check.addEventListener('blur', function () {
        if (inputPwd.value === input_second_check.value) {
            span_ts.innerHTML = '你输入的正确！';
            span_ts.className = 'success'
        } else {
            span_ts.innerHTML = '俩次密码不一样！';
            span_ts.className = 'error'
        }
    }, false);


    //完成注册事件
    var wczc = document.querySelector('#wczc');
    var ew = document.querySelector('.ew');


    //拿取俩个i的
    var f_i = document.querySelector('#user');
    var s_i = document.querySelector('#user_pwd');
    var body = document.querySelector('body');

    wczc.addEventListener('click', function () {
        ew.style.display = 'block';
        body.style.backgroundColor = 'gray'
        console.log(body);
        f_i.innerHTML = inputPhone.value;
        s_i.innerHTML = input_second_check.value;
    }, false);


    //拿x的
    var close = document.querySelector('#close');

    close.addEventListener('click', function () {
        ew.style.display = 'none';
        body.style.backgroundColor = ''
    }, false);

}