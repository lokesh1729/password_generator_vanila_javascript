import './styles.scss'

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
]

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const specialChars = ['*', '@', '&', '%', '#', '$', '!']

function generateRandomString(choices, length) {
    let result = ''
    for (let index = 0; index < length; index += 1) {
        result += choices[Math.floor(Math.random() * choices.length)]
    }
    return result
}

document
    .getElementById('generatePassword')
    .addEventListener('click', function handler() {
        const randomString = generateRandomString(
            [...alphabets, ...numbers, ...specialChars],
            10
        )
        document.getElementById('result').value = randomString
    })

document
    .getElementById('copyToClipboard')
    .addEventListener('click', function handler() {
        // copy to clipboard
    })
