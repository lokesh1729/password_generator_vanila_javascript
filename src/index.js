import './styles.scss'

function generateRandomString() {
    return 'adfaoij*242'
}

document
    .getElementById('generatePassword')
    .addEventListener('click', function handler() {
        // generate password logic
        const randomString = generateRandomString()
        document.getElementById('result').innerHTML = randomString
    })
