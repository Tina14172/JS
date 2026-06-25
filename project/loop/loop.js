let playAgain = true;

for(;;)
{

    const secretNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;
    let guessedCorrectly = false;

    alert("Welcome to Number Guessing Game!\nGuess a number between 1 and 100.");

    while (attempts < 10 && !guessedCorrectly) 
    {

        let userInput = prompt("Enter your guess (1-100):");

        if (userInput === null || isNaN(userInput)) 
        {
            alert("Please enter a valid number.");
            continue;
        }
        let guess = Number(userInput);

        if (guess < 1 || guess > 100) 
        {
            alert("Number must be between 1 and 100.");
            continue;
        }

        attempts++;

        if (guess > secretNumber) 
        {
            alert("Too High!");
        }
        else if (guess < secretNumber) 
        {
            alert("Too Low!");
        }
        else 
        {
            guessedCorrectly = true;
            alert(
                "Congratulations! You Win!\n" +
                "You guessed the number in " +
                attempts +
                " attempts."
                );
        }
    }

    if (!guessedCorrectly) 
    {
        alert(
            "Game Over!\n" +
            "The correct number was " +
            secretNumber
        );
    }

    let choice = prompt("Do you want to Play Again? (Yes/No)");

    if (choice === null || choice.toLowerCase() !== "yes") 
    {
        playAgain = false;
        alert("Thank You for Playing!");
    }
}