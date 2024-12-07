// Initialize lists
let countableWords = JSON.parse(localStorage.getItem('countableWords')) || ['apple', 'dog', 'book', 'table'];
let uncountableWords = JSON.parse(localStorage.getItem('uncountableWords')) || ['water', 'sand', 'milk', 'sugar'];

// Function to display the lists
function displayLists() {
    const countableList = document.getElementById('countableList');
    const uncountableList = document.getElementById('uncountableList');
    
    countableList.innerHTML = '';
    uncountableList.innerHTML = '';

    countableWords.forEach(word => {
        let li = document.createElement('li');
        li.textContent = word;
        countableList.appendChild(li);
    });

    uncountableWords.forEach(word => {
        let li = document.createElement('li');
        li.textContent = word;
        uncountableList.appendChild(li);
    });
}

// Function to check if the word is countable or uncountable
function checkWord() {
    const wordInput = document.getElementById('wordInput').value.trim().toLowerCase();
    const result = document.getElementById('result');
    const classificationSection = document.getElementById('classification-section');
    const classifiedWord = document.getElementById('classified-word');
    
    if (!wordInput) {
        result.textContent = "Please enter a word!";
        return;
    }

    // Check if the word is in the countable or uncountable list
    if (countableWords.includes(wordInput)) {
        result.textContent = `The word '${wordInput}' is countable.`;
        classificationSection.style.display = 'none';
    } else if (uncountableWords.includes(wordInput)) {
        result.textContent = `The word '${wordInput}' is uncountable.`;
        classificationSection.style.display = 'none';
    } else {
        result.textContent = `The word '${wordInput}' is not in the list.`;
        classifiedWord.textContent = wordInput;
        classificationSection.style.display = 'block';
    }
}

// Function to add word to either countable or uncountable list
function addToList(listType) {
    const wordInput = document.getElementById('wordInput').value.trim().toLowerCase();
    
    if (listType === 'countable' && !countableWords.includes(wordInput)) {
        countableWords.push(wordInput);
    } else if (listType === 'uncountable' && !uncountableWords.includes(wordInput)) {
        uncountableWords.push(wordInput);
    }

    // Save the lists to localStorage
    localStorage.setItem('countableWords', JSON.stringify(countableWords));
    localStorage.setItem('uncountableWords', JSON.stringify(uncountableWords));

    // Refresh the word lists on the page
    displayLists();

    // Hide classification section
    document.getElementById('classification-section').style.display = 'none';
    document.getElementById('wordInput').value = '';  // Clear the input
    document.getElementById('result').textContent = '';
}

// Initially display the lists
displayLists();
