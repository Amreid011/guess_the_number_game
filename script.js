document.addEventListener('DOMContentLoaded', () => {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submitGuess');
    const playAgainButton = document.getElementById('playAgain');
    const messageDisplay = document.querySelector('.message');
    let guessCount = 0;

    submitButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value);
        guessCount++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            messageDisplay.textContent = 'Please enter a valid number between 1 and 100.';
        } else if (guess === secretNumber) {
            messageDisplay.textContent = `Congratulations! You guessed the number ${secretNumber} correctly in ${guessCount} guesses!`;
            messageDisplay.style.color = 'green';
            guessInput.disabled = true;
            submitButton.disabled = true;
            playAgainButton.style.display = 'block';
        } else if (guess < secretNumber) {
            messageDisplay.textContent = 'Too low! Try guessing higher.';
            messageDisplay.style.color = 'red';
        } else {
            messageDisplay.textContent = 'Too high! Try guessing lower.';
            messageDisplay.style.color = 'red';
        }
    });

    playAgainButton.addEventListener('click', () => {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        guessCount = 0;
        messageDisplay.textContent = '';
        messageDisplay.style.color = '';
        guessInput.value = '';
        guessInput.disabled = false;
        submitButton.disabled = false;
        playAgainButton.style.display = 'none';
    });
});
