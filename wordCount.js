function strFunctions() {
    const inputText = document.getElementById('value').value;
    if(inputText == "") {
        alert(`The value should not be null`);
    } else {
    const textWithoutSpaces = inputText.replace(' ', '');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < textWithoutSpaces.length; i++) {
        const char = textWithoutSpaces.charAt(i).toLowerCase();
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }

    document.getElementById('result').innerHTML = `The vowels count: ${vowelCount}<br>The consonants count: ${consonantCount}`;
}
}


function nonDuplicateCount(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] >= 1) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    let count = Object.keys(obj).length;
    return count;
}


// let sentence = "never give up on ur dreams";
// strFunctions(sentence);