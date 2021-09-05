function generatePassword(length, specChars) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    if (specChars) {
        characters += '!@#$%^&*'
    }
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result
}

const lengthSlider = document.getElementById('lengthRange');
const lengthDisplay = document.getElementById('lengthDisplay');
lengthDisplay.innerHTML = lengthSlider.value;
lengthSlider.oninput = function() {
    lengthDisplay.innerHTML = this.value;
}


const specCharsBox = document.getElementById('specChars');

let output;
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', () => {
    if (specCharsBox.checked) {
        output = generatePassword(lengthSlider.value, true);
        document.body.querySelector('h1').innerText = output;
    } else {
        output = generatePassword(lengthSlider.value, false);
        document.body.querySelector('h1').innerText = output;
    }
});