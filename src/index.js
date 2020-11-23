import './styles.scss';

const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbols = ['*', '@', '&', '%', '#', '$', '!'];

function generateRandomString(choices, length, noDuplicates) {
    const result = [];
    for (let index = 0; index < length; index += 1) {
        let currRes = choices[Math.floor(Math.random() * choices.length)];
        while (noDuplicates && result.includes(currRes)) {
            currRes = choices[Math.floor(Math.random() * choices.length)];
        }
        result.push(currRes);
    }
    return result.join('');
}

Math.shuffle = function shuffle(arr) {
    const copyArr = [...arr];
    for (let index = arr.length; index >= 0; index -= 1) {
        const randomIdx = Math.floor(Math.random() * (index + 1));
        [copyArr[index], copyArr[randomIdx]] = [
            copyArr[randomIdx],
            copyArr[index],
        ];
    }
    return copyArr;
};

function generatePassword(maxLength, minSymbols, minNumbers) {
    const symbolStr = generateRandomString(symbols, minSymbols, true);
    const numStr = generateRandomString(numbers, minNumbers, true);
    const charStr = generateRandomString(
        alphabets,
        maxLength - minNumbers - minSymbols,
        false
    );
    return Math.shuffle([
        ...symbolStr.split(''),
        ...numStr.split(''),
        ...charStr.split(''),
    ]).join('');
}

document
    .getElementById('generatePassword')
    .addEventListener('click', function handler() {
        const length = +document.getElementById('passwordLength').value;
        const minSymbols = +document.getElementById('symbolLength').value;
        const minNumbers = +document.getElementById('numberLength').value;
        document.getElementById('result').value = generatePassword(
            length,
            minSymbols,
            minNumbers
        );
    });

document
    .getElementById('copyToClipboard')
    .addEventListener('click', function handler() {
        const result = document.getElementById('result');
        result.select();
        result.setSelectionRange(0, 99999);
        document.execCommand('copy');
        const clipboardBtn = document.getElementById('copyToClipboard');
        const oldClipboardValue = clipboardBtn.innerHTML;
        clipboardBtn.innerHTML = 'Copied';
        setTimeout(function resetClipboardName() {
            clipboardBtn.innerHTML = oldClipboardValue;
        }, 2000);
    });

document
    .getElementById('passwordLength')
    .addEventListener('change', function handler(event) {
        const length = +event.target.value;
        if (length > 25) {
            // eslint-disable-next-line no-alert
            alert('password should not exceed 25 in length');
            return;
        }
        const minSymbols = +document.getElementById('symbolLength').value;
        const minNumbers = +document.getElementById('numberLength').value;
        document.getElementById('result').value = generatePassword(
            length,
            minSymbols,
            minNumbers
        );
    });

document
    .getElementById('numberLength')
    .addEventListener('change', function handler(event) {
        const minNumbers = +event.target.value;
        if (minNumbers > 8) {
            // eslint-disable-next-line no-alert
            alert('numbers should not exceed 8 in password');
            return;
        }
        const length = +document.getElementById('passwordLength').value;
        const minSymbols = +document.getElementById('symbolLength').value;
        document.getElementById('result').value = generatePassword(
            length,
            minSymbols,
            minNumbers
        );
    });

document
    .getElementById('symbolLength')
    .addEventListener('change', function handler(event) {
        const minSymbols = +event.target.value;
        if (minSymbols > 5) {
            // eslint-disable-next-line no-alert
            alert('symbols should not exceed 5 in password');
            return;
        }
        const length = +document.getElementById('passwordLength').value;
        const minNumbers = +document.getElementById('numberLength').value;
        document.getElementById('result').value = generatePassword(
            length,
            minSymbols,
            minNumbers
        );
    });
