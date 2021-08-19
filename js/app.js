function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        //  console.log('hesdlf df  s', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        } else if (number == '<') {
            // calcInput.value = calcInput - calcInput.value;
        }
    } else {

        const previousCalc = calcInput.value + number;
        calcInput.value = previousCalc;
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typesNumbers = document.getElementById('typed-numbers').value;
    const notifySucces = document.getElementById('notify-succes');
    const failError = document.getElementById('notify-fail');
    if (pin == typesNumbers) {
        notifySucces.style.display = 'block';
        failError.style.display = 'none';
    } else {
        failError.style.display = 'block';
        notifySucces.style.display = 'none';
    }
}