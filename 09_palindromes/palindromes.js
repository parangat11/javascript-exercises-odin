const palindromes = function (string) {
    let n = string.length;
    let newString = "";
    for(let i = 0; i < n; i++) {
        if(string[i] !== ' ') {
            newString += string[i].toLowerCase();
        }
    }
    newString = remove(newString);
    n = newString.length;
    for(let i = 0; i < n; i++) {
        if(newString[i] !== newString[n - 1 - i]) {
            return false;
        }
    }
    return true;
};

function remove(str) {
    return str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
}

// Do not edit below this line
module.exports = palindromes;
