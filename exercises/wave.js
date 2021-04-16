// Doe de wave!

// Schrijf een functie die een string neemt als input
// De functie geeft een array terug, waarbij één voor één elke letter een HOOFDLETTER is

// Opdracht 1
// wave("hello") // geeft ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
function waveV0_1(str) {
    const arrStr = [];
    for (let i = 0; i < str.length; i++) {
        let result = "";
        for (let j = 0; j < str.length; j++) {
            if(i===j) {
                result += str.charAt(j).toUpperCase();
            } else {
                result += str.charAt(j);
            }
        }
        arrStr.push(result);
    }
    return arrStr;
}

console.log(waveV0_1("hello"));

// Opdracht 2
// Pas de functie zo aan, dat alle letters behalve de 'wave'-letter, klein zijn
// wave("mSnTaaL") // geeft ['Msntaal','mSntaal','msNtaal','msnTaal','msntAal','msntaAl','msntaaL']
function waveV0_2(str) {
    const arrStr = [];
    for (let i = 0; i < str.length; i++) {
        let result = "";
        for (let j = 0; j < str.length; j++) {
            if(i===j) {
                result += str.charAt(j).toUpperCase();
            } else {
                result += str.charAt(j).toLowerCase();
            }
        }
        arrStr.push(result);
    }
    return arrStr;
}

console.log(waveV0_2("MsnTaal"));
// Opdracht 3
// Pas de functie zo aan, dat andere symbolen de wave niet onderbreken
// Dus geen 'hi-ya' in allemaal kleine letters, omdat het streepje (-) dat geen hoofdletter kan worden, wordt overgeslagen. Hint: 'a' !== 'A', maar '-' === '-'
// wave("Hi-Ya") // geeft [ 'Hi-ya', 'hI-ya', 'hi-Ya', 'hi-yA']

function waveV1(str) {


    str = arrayIteration(str);

    return str;
}

function arrayIteration(str) {
    const arrStr = [];
    //let dash = checkForDash(str);

    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) === '-'){
            continue;
        }

        arrStr.push(charIteration(str, i));
    }

    return arrStr;
}

function charIteration(str, i) {
    const result = [];

    for (let j = 0; j < str.length; j++) {
        if(i===j) {
            result.push(str.charAt(j).toUpperCase());
        } else {
            result.push(str.charAt(j).toLowerCase());
        }
    }

    return result.join("");

}

console.log(waveV1("H-i-Y-a"));

// wave 2.0
function waveV2(str) {
    const strArr = [];
    const length = str.length;

    for (let i = 0; i < length; i++) {
        if (str.charAt(i) === '-'){
            continue;
        }
        switch (i) {
            case 0:
                strArr.push(str.substring(0, 1).toUpperCase() + str.substring(1, length).toLowerCase());
                break;
            case length:
                strArr.push(str.substring(0, i - 1).toLowerCase() + str.substring(i - 1, i).toUpperCase());
                break;
            default:
                strArr.push(str.substring(0, i).toLowerCase() + str.substring(i, i + 1).toUpperCase() + str.substring(i + 1, length).toLowerCase());
        }
    }

    return strArr;
}

console.log(waveV2("T-e-st"));

// wave 3.0

function waveV3(str) {
    const strArr = [];
    for (let i = 0; i < str.length; i++) {
    if(!/^[a-zA-z]/i.test(str[i])){
            continue;
        }
        str = str.toLowerCase();
        let result = str.split("");

        result[i] = result[i].toUpperCase();
        result = result.join("");
        strArr.push(result);
    }
    return strArr;
}

console.log(waveV3("H-o-I MaLoU"));