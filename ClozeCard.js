var flashcards = [];
var inquirer = require('inquirer');
var CreateCard = require('./ClozeCard.js');
var cardCount = 0;
var makeMore = function() {
    inquirer.prompt([
        {
        type: 'confirm',
        name: "confirm",
        message: "Do you want to create another FlashCard?"
        }
    ]).then(function(confirm){
        if (confirm.confirm) {
            newFlashCard();
        }else{
            newCard();
        }
    })
}
var newCard = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: "pick",
            message: "What would you like to do?",
            choices: [
                "Create a FlashCard",
                "Show FlashCard's'",
                "Pick a Flashcard"
            ]
        }
    ]).then(function(selection){
        switch (selection.pick){
            case "Pick a FlashCard":
            newFlashCard();
            break;

            case "Show FlashCards":
            console.log(flashcards);
            newCard();
            break;

            case "Create a Flashcard":
            pickCard();
            break;
        }
    })
}
var pickCard = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'pickflashcard',
            message: 'Pick a FlashCard from below',
            choices: [
                '1',
                '2',
                '3',
                '4',
                '5',
                'back'
            ]
        }
    ]).then(function(flash) {
        switch (flash.pickflashcard){
            case '1':
            if (flashcards[0]) {
                flashcards[0].printFront()
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Are you ready to see the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[0].printBack();
                        pickCard();
                    }else{pickCard();}
                })
            }else {console.log("There is not a flashcard in this slot")}
            break;

            case '2':
            if (flashcards[1]) {
                flashcards[1].printFront()
                 inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Are you ready to see the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[1].printBack();
                        pickCard();
                    }else{pickCard();}
                })
            }else {console.log("There is not a flashcard in this slot")}
            break;

            case '3':
            if (flashcards[2]) {
                flashcards[2].printFront()
                 inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Are you ready to see the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[2].printBack();
                        pickCard();
                    }else{pickCard();}
                })
            }else {console.log("There is not a flashcard in this slot")}
            break;

            case '4':
            if (flashcards[3]) {
                flashcards[3].printFront()
                 inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Are you ready to see the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[3].printBack();
                        pickCard();
                    }else{pickCard();}
                })
            }else {console.log("There is not a flashcard in this slot")}
            break;

            case '5':
            if (flashcards[4]) {
                flashcards[4].printFront()
                 inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Do you want to see the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[4].printBack();
                    }else{pickCard();}
                })
            }else {console.log("No flashcard in this slot")}
            break;  

            case 'back':
            newCard();
            break;          
        }
    });
}
//function used to create flashcard
var newFlashCard = function() {
    if (cardCount < 5) {
        console.log("This is your " + (cardCount+1) + " flash card.");
        inquirer.prompt([
        {
            name: "front",
            message: "Please write Front Text for the Flashcard"
        },{
            name: "back",
            message: "Please write Back Text for the Flashcard"
        }
    ]).then(function(answers) {
        var newFlashCard = new CreateCard(answers.front, answers.back);
        flashcards.push(newFlashCard);
        console.log("The flashcard has been saved");
        cardCount++;
        makeMore();
    });
    }
}
newCard();