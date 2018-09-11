function convertToRoman(num) {
    // a lookup object with key value pairs of roman numeral with its decimal value equivalent
    let lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    // converted num to be returned
    let romanNum = '';
    
    for (let i in lookup) {
        while (num >= lookup[i]) {
            romanNum += i;
            num -= lookup[i];
        }
    }
    return romanNum;
}
