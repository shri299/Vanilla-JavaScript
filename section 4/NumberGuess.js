//variables

    let min=1,
        max=10,
        winningNum= 2,
        GuessesLeft=3;


//UI elements

    const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessButton = document.querySelector('#guess-button'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

//assign UI min max

    minNum.textContent = min;
    maxNum.textContent = max;

// //play again event listner(applying event delegation here: using a parent to target the child)

//     game.addEventListener('mousedown',function(e)
//     {
//         if(e.target.className === 'play-again')
//         {
//             window.location.reload();//reloads the page
//         }
//     });

//create eventlistner for the button


    guessButton.addEventListener('click',function(){

        

        let guess = parseInt(guessInput.value); //changing from string to integer
        

    //validate that the input must be authentic

        if(isNaN(guess) || guess<min || guess>max)
        {

            setMessage(`please enter a number between ${min} and ${max}`,'red');
        }

//     //check if won
//         if(guess === winningNum)
//         { //game won

//             // //disable the input
//                 // guessInput.disabled = true;
//             // //change border to green if the win
//                 // guessInput.style.borderColor = 'green';
//             // //display a winning message
//                 // setMessage(`${winningNum} is coreect YOU WON`,'green');

//             gameover(true,`${winningNum} is correct YOU WON`);
//         }
    
//         else
//         {//game loosed


//             //subtract one from the guesses left
//             GuessesLeft = GuessesLeft-1;

//             if(GuessesLeft===0)
//             {
//             //gameover lost
//                 //disable the input
//                     // guessInput.disabled = true;
//                 // //change border to green if the win
//                     // guessInput.style.borderColor = 'red';
//                 // //display a winning message
//                     // setMessage(`Game Over You Lost The Correct Number Is ${winningNum} `,'red');

//                 gameover(false,`Game Over You Lost The Correct Number Is ${winningNum}`);


//             }
//             else
//             {
            
//             //game continues answer wrong

//                 //change border color
//                     guessInput.style.borderColor = 'red';

//                 //clear input
//                     guessInput.value = '';

//                 //display message
//                     setMessage(`${guess} is not coreect. ${GuessesLeft} guesses left`,'red');

//             }

//         }
    });


// //gameover(a function to prevent repetition of statement)

//     function gameover(won,msg)
//     {
//         let color;
//         won===true? color = 'green': color = 'red';
//         //disable the input
//         guessInput.disabled = true;
//         //change border to green if the win
//         guessInput.style.borderColor = color;
//         guessInput.style.color = color;
//         //display a winning message
//         setMessage(msg);


//         //play again

//             guessButton.value = 'play again';
//             guessButton.className +='play-again'; //when you append a class inside a element which already contalins a class we use this +=


        
//     }


// //get winning num

//     function getWinningNum(min,max)
//     {

//         console.log(Math.floor(Math.random()*(max-min+1)+min));

//     }


//function to display message

    function setMessage(msg,color)
    {
        message.style.color = color;
        message.textContent = msg;
    }

