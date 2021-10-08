function letterValue(ch) {
    let num = ch.charCodeAt(0);
    return num - 96;
}

function letter(num) {
    return String.fromCharCode(96 + num);
}

function encode(message, key) {
    let returns = "";
    for (let i = 0; i < message.length; i++) {

        let m = letterValue(message[i]);
        let k = letterValue(key[i]);
        let t = m + k;
        if (t > 26)
            t -= 26
        let c = letter(t - 1);
        //console.log(t, c);
        returns += c
    }
    return returns;
}

function decode(message, key) {
    let returns = "";
    for (let i = 0; i < message.length; i++) {

        let m = letterValue(message[i]);
        let k = letterValue(key[i]);
        let t = m - k;
        if (t < 0)
            t += 26
        let c = letter(t + 1);
        //console.log(t, c);
        returns += c
    }
    return returns;
}


//let message = "abcdefghijklmnopqrstuvwxyz"
let message = "meetmebythetree"
let key = "sconessconessconessconessconessconesscones"
let encoded = encode(message, key)
console.log(encoded);
console.log(decode(encoded,key))