/* USER INPUT VARIABLES */
let userString1;
let userString2;
let functionCounter = 0;
const inputWord1 = "Place your first word here:";
const inputWord2 = "Place your second word here:";
/* USER INPUT STRING DISPLAY */
const equalLengthWords = "The words are the same length.";
const differentLengthWords = "The words are not the same length.";
const equalLengthStr = "The sentences are the same length.";
const differentLengthStr = "The sentences are not the same length.";
const sameInputLength = "Your inputs are the same length";
const differentInputLength = "Your inputs are not the same length";
const wordMessage = "Your word was:";
const stringMessage = "Your sentence was:";
const stringLengthMessage = "Letter count:";
/* ERROR/SUCCESS VARIABLES */
const errorString = "Wrong input";
let successInput = 0;
/* LENGTH VARIABLES */
let letterCountString1; 
let letterCountString2; 
/* SPACES VARIABLES */
let containsSpacesStr1 = false;
let containsSpacesStr2 = false;
let spacesCounter = 0;
let spacesStr1 = 0;
let spacesStr2 = 0;
/* SENTENCES VERIFICATION VARIABLES */
let isSentenceStr1 = false;
let isSentenceStr2 = false;

/* FUNCTIONS */
function hasSpaces(str) {
    if (str.indexOf(' ') !== -1) {
      return true
    } else {
      return false
    }
}

function spaceCounter (str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            spacesCounter++;
        }
    }
    return spacesCounter;
}

function letterCounter (str, containsSpaces, spacesCounter) {
    if (!containsSpaces) {
        return str.length;
    }
    else {
        return (str.length - spacesCounter);
    }
}

/* GET WORD INPUT */
userString1 = prompt(inputWord1);
console.log(userString1);
userString2 = prompt(inputWord2);
console.log(userString2);

/* INPUT VALIDATION */
if (userString1 == null || userString2 == null){
    console.log(errorString);
}
else {
    if (userString1.length != 0 && userString2.length != 0){ 
        successInput++;
    }
    else {
        console.log(errorString);
    }
}

/* COMPARE LENGTH */
if (successInput) {
    containsSpacesStr1 = hasSpaces(userString1);
    if (containsSpacesStr1){
    spacesStr1 = spaceCounter(userString1); 
    isSentenceStr1 = true;
    }
    letterCountString1 = letterCounter(userString1, containsSpacesStr1, spacesStr1);

    containsSpacesStr2 = hasSpaces(userString2);
    if (containsSpacesStr2) {
        spacesStr2 = spaceCounter(userString2);
        isSentenceStr2 = true;
    }
    letterCountString2 = letterCounter(userString2, containsSpacesStr2, spacesStr2);
    if(isSentenceStr1) {
        console.log(stringMessage + " " + userString1 + ". " + stringLengthMessage + " " + letterCountString1);
    }
    else {
        console.log(wordMessage + " " + userString1 + ". " + stringLengthMessage + " " + letterCountString1);
    }
    if(isSentenceStr2) {
        console.log(stringMessage + " " + userString2 + ". " + stringLengthMessage + " " + letterCountString2);
    }
    else {
        console.log(wordMessage + " " + userString2 + ". " + stringLengthMessage + " " + letterCountString2);
    }
    if (!isSentenceStr1 && !isSentenceStr2){
        if (userString1.length == userString2.length) {
            console.log(equalLengthWords);
        }
        else {
            console.log(differentLengthWords);
        } 
    }
    else if(isSentenceStr1 && isSentenceStr2){
        if (letterCountString1 == letterCountString2){
            console.log(equalLengthStr);
        }
        else {
            console.log(differentLengthStr);
        }
    }
    else if (isSentenceStr1 && !isSentenceStr2){
        if(letterCountString1 == userString2.length) {
            console.log(sameInputLength);
        }
        else {
            console.log(differentInputLength);
        }
    }
    else {
        if(userString1.length == letterCountString2){
            console.log(sameInputLength);
        }
        else {
            console.log(differentInputLength);
        }
    }
}