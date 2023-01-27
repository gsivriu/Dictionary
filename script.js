let wordArray = [];

function storeWord(event) {
    let word = document.getElementById("wordEnter").value;
    if (word === "") {
        alert("please enter a word!");
    } else {
        wordArray.push(word);
    }
    document.getElementById("wordEnter").value = "";
}

function checkWord() {
    let oldImg = imageContainer.getElementsByTagName("img")[0];
    if (oldImg) {
        imageContainer.removeChild(oldImg);
    }
    let newword = document.getElementById("wordCheck").value;
    document.getElementById("wordCheck").value = "";
    let match = 0;
    message.innerHTML = ""; // Clear previous message
    for (let i = 0; i < wordArray.length; i++) {
        if (newword === wordArray[i]) {
            ++match;
        }
    }
    if (match > 0) {
        message.innerHTML += 'Word found in dictionary';
        let correctImg = document.createElement("img");
        correctImg.src = "ok.jpeg";
        imageContainer.appendChild(correctImg);
    } else {
        message.innerHTML += 'No word found';
        let correctImg = document.createElement("img");
        correctImg.src = "not ok.jpeg";
        imageContainer.appendChild(correctImg);
    }
    document.getElementById("wordCheck").value = "";
}