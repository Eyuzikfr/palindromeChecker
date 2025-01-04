const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultElement = document.getElementById('result');

checkButton.addEventListener ("click", ()=> {
    event.preventDefault();
    const inputValue = textInput.value;
    const updatedInput = clearDelimiters(inputValue);
    console.log(updatedInput);
    if (inputValue === "") {
        alert('Please input a value.');
    } else if(checkPalindrome(updatedInput)) {
        resultElement.innerText = `${inputValue} is a palindrome`;
        resultElement.style.display = 'block';
    } else {
        resultElement.innerText = `${inputValue} is not a palindrome`;
        resultElement.style.display = 'block';
    }
});

function clearDelimiters(userInput) {
    const regex = /[^a-zA-Z0-9]/g;
    return userInput.replace(regex, '');
}

const checkPalindrome = ((userInput) => {
    const userInputLowerCase = userInput.toLowerCase();
    const rev = userInput.split('').reverse().join('');
    const revLowerCase = rev.toLowerCase();
    return userInputLowerCase === revLowerCase;
});