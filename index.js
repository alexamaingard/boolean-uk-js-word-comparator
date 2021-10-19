let userString1;
let userString2;
let functionCounter = 0;
let equalLengthStrings = "The words are the same length.";
let differentLengthStrings = "The words are not the same length.";
let errorString = "Wrong input";
let successInput = 0;

/* GET WORD INPUT */
userString1 = prompt("Place your first word here:");
console.log(userString1);
userString2 = prompt("Place your second word here:");
console.log(userString2);

/* COMPARE WORD LENGTH */
if (userString1 == null || userString2 == null){
    console.log(errorString);
}
else {
    if (userString1.length != 0 && userString2.length != 0){
        if (userString1.length == userString2.length) {
            console.log(equalLengthStrings);
        }
        else {
            console.log(differentLengthStrings);
        }  
        successInput++;
    }
    else {
        console.log(errorString);
    }
}

/* CHALLENGE 1: WORD COUNT AND WORD DISPLAY*/
let letterCountString1; 
let letterCountString2; 
let wordMessage = "Your word was:"
let stringLengthMessage = "Letter count:" 

/* erased for challenge 2
if(successInput) {
    letterCountString1 = userString1.length;
    letterCountString2 = userString2.length;
    console.log(wordMessage + " " + userString1 + ". " + stringLengthMessage + " " + letterCountString1);
    console.log(wordMessage + " " + userString2 + ". " + stringLengthMessage + " " + letterCountString2);
}
*/

/* CHALLENGE 2: SENTENCE COMPARISON*/
let containsSpacesStr1 = false;
let containsSpacesStr2 = false;
let spacesCounter = 0;
let spacesStr1 = 0;
let spacesStr2 = 0;
let isSentenceStr1 = false;
let isSentenceStr2 = false;
stringMessage = "Your sentence was:"

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
}