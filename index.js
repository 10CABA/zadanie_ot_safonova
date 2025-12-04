//  Задача 1
function concatenateStrings(a, b) {

    let concatenated = a + b;
    let result = concatenated.replace(/\s+/g, '');
    return result;
}

//console.log("Задача 1")
//console.log(concatenateStrings("string nubma 1","string nubma 2"))

//  Задача 2
function getStringLength(str) {
    return str.length;
}

//console.log("Задача 2")
//console.log(getStringLength("blablabla"))

//  Задача 3
function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}

//console.log("Задача 3")
//console.log(getStringFromTemplate("big", "smoke"))

//  Задача 4
function getChar(str, index) {
    return str[index - 1];
}

//console.log("Задача 4")
//console.log(getChar("qweqwe", 4))

//  Задача 5
function removeFirstOccurrences(str, value) {
    const index = str.indexOf(value);
    if (index === -1) {
        return str;
    }
    
    if (index === 0) {
        return str.slice(value.length).trimStart();
    }
    
    if (index + value.length === str.length) {
        return str.slice(0, index).trimEnd();
    }
    
    let start = index;
    let end = index + value.length;
    
    const before = str[start - 1];
    const after = str[end];
    
    if (before === ' ' && after === ' ') {
        return str.slice(0, start) + str.slice(end + 1);
    }
    
    return str.slice(0, start) + str.slice(end);
}

//console.log("Задача 5")
//console.log(removeFirstOccurrences("Life isnt eternal", "isnt"))

//  Задача 6
function getRectangleString(w, h) {
    const topBottom = '*'.repeat(w) + '\n';
    const middle = w > 1 ? 
        ('*' + ' '.repeat(w - 2) + '*\n').repeat(h - 2) : 
        ('*\n').repeat(h - 2);
    
    return h === 1 ? 
        topBottom.trimEnd() : 
        (topBottom + middle + topBottom).trimEnd();
}

//console.log("Задача 6")
//console.log(getRectangleString(4,5))