const DEL = 46;
const BACK_SPACE = 8;
const TAB = 9;
const ESCAPE = 27;
const KEYCODE_A = 65;
const END = 35;
const RIGHT = 39;
const KEYCODE_0 = 48;
const KEYCODE_9 = 57;
const NUMPAD_0 = 96;
const NUMPAD_9 = 105;

let msgCheckbox = document.getElementById('msg-checkbox');
msgCheckbox.addEventListener('click', showTextarea);

function showTextarea() {
    let textarea =	document.getElementById('msg-textarea');
    if (msgCheckbox.checked) {
        textarea.style.display = 'inline-block';
    } else textarea.style.display = 'none';
}

function brand(id) {
    let cardNumber = document.getElementById(id + '-card-number').value;
    let brand = document.getElementById(id + '-brand');
    switch (cardNumber[0]) {
        case '4':
        {
            brand.classList.add('visa-card');
            break;
        }
        case '5':
        {
            brand.classList.add('master-card');
            break;
        }
        case '6':
        {
            brand.classList.add('maestro-card');
            break;
        }
        default:
        {
            brand.classList.remove('visa-card', 'master-card', 'maestro-card');
            break;
        }
    }
}

$(document).ready(function(){
    $('#sender-card-number').inputmask('9999 9999 9999 9999', {'placeholder': ' '});
    $('#receiver-card-number').inputmask('9999 9999 9999 9999', {'placeholder': ' '});
    $('#security-number').inputmask('999', {'placeholder': ' '});
    $('#month').inputmask('99', {'placeholder': ' '});
    $('#year').inputmask('99', {'placeholder': ' '});
});

$(document).ready(function() {
    $('input.num').keydown(function(event) {
        if ( event.keyCode == DEL || event.keyCode == BACK_SPACE || event.keyCode == TAB || event.keyCode == ESCAPE ||
            (event.keyCode == KEYCODE_A && event.ctrlKey === true) ||
            (event.keyCode >= END && event.keyCode <= RIGHT)) {
            return;
        }
        else {
            if ((event.keyCode < KEYCODE_0 || event.keyCode > KEYCODE_9) && (event.keyCode < NUMPAD_0 || event.keyCode > NUMPAD_9 )) {
                event.preventDefault();
            }
        }
    });
});


