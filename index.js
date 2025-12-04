//  Задача 1
function concatenateStrings(a, b) {

    let concatenated = a + b;
    let result = concatenated.replace(/\s+/g, '');
    return result;
}

//  Задача 2
function getStringLength(str) {
    return str.length;
}

//  Задача 3
function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}

//  Задача 4
function getChar(str, index) {
    return str[index - 1];
}

//  Задача 5
function removeFirstOccurrences(str, value) {
    const index = str.indexOf(value);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + value.length);
}

//  Задача 6
const getRectangleString = (w, h) => {
    let result = '';
    for (let i = 0; i < h; i++) {
        result += '*'.repeat(w) + '\n';
    }
    return result.trim();
}
