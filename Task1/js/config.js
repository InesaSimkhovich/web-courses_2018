let btn_bg_color = '#008000';
let currency = 'BYN';

(function(){
    let root = document.querySelector(':root');
    root.style.setProperty('--btn-color', btn_bg_color);

    let cur = document.getElementsByClassName('input-group-addon');
    let length = cur.length;
    for (let i = 0; i < length; i++){
        cur[i].textContent = currency;
    }
})();
