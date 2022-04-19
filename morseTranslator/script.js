const inputFieldEng = document.querySelector("#engInput");
const inputFieldMorse = document.querySelector("#morseInput");
const outputField = document.querySelector("#output");

const morseDict = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "&": ".-...",
    "'": ".----.",
    "@": ".--.-.",
    ")": "-.--.-",
    "(": "-.--.",
    ":": "---...",
    ",": "--..--",
    "=": "-...-",
    "!": "-.-.--",
    ".": ".-.-.-",
    "-": "-....-",
    "×": "-..-",
    "x": "-..-",
    "%": "------..-.-----",
    "+": ".-.-.",
    '"': ".-..-.",
    "?": "..--..",
    "/": "-..-.",
    " ": "/"
};

function engToMorse() {
    let engStr = inputFieldEng.value;
    let morseStr = engStr.toUpperCase().split("").map(
        el => {
            return morseDict[el] ? morseDict[el] + " " : el;
        }
    ).join("");

    outputField.innerHTML = inputFieldEng.value !== "" ?
        `${engStr}: ${morseStr}` : "Please enter some text";
}

function morseToEng() {
    let morseStr = inputFieldMorse.value;
    let engStrWords = morseStr.split("/");
    let morseTransFinal = "";
    for (word of engStrWords) {
        let morseTrans = word.split(" ").map(
            ml => {
                for (let prop in morseDict) {
                    if (morseDict.hasOwnProperty(prop)) {
                        if (morseDict[prop] === ml) return prop
                    }
                }
            }
        )
        morseTransFinal += morseTrans;
    }

    outputField.innerHTML = inputFieldMorse.value !== "" ?
        `${morseStr}: ${morseTransFinal}` : "Please enter some text";
}