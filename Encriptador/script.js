document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').value;
    const decryptedText = decrypt(outputText);
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

function encrypt(text) {
    const transformations = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' };
    return text.split('').map(char => transformations[char] || char).join('');
}

function decrypt(text) {
    const transformations = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
    return text.split('').map(char => transformations[char] || char).join('');
}
