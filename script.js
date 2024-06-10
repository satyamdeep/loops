// Loops in JavaScript
// 1. for loop

function textPrint(){
    let n = prompt("Enter a number");
    for (let i = 1; i <= n; i++) {
      console.log("Hello JavaScript using for loop");
    }
}

//Count 1 to n

function printCount(){
    let n = prompt("Enter a number");
    for (let i = 1; i <= n; i++) {
        console.log(i);
      }
}


//Sum of 1 to n numbers
function myFunction() {
    let m = prompt("Please enter the number");
  
    let sum = 0;
    for (let i = 1; i <= m; i++) {
      sum = sum + i;
    }
    console.log(`sum of 1 to ${m} is ${sum}`);
  }

// While Loop
 function textPrintWhile(){
    let n = prompt("Enter the number:")
    let i =1;
    while (i<=n) {
       console.log("Hello JavaScript Using While loop");
       i++;
    }  
 }

 //do-while loop
  function textPrintDW(){
    let n = prompt("Enter the number:")
    let i =1;
    do {
        console.log("Hello JavaScript using do-while loop");
        i++;
    } while (i<=n);
  }

  // for-of Loop
function forOf(){
    size = 0
    let str= prompt("Enter the string");
    for(let val of str){
      console.log(val);
      size++;
    }
    console.log(`length of the string is ${size}`);
}

// for-in loop
function forIn(){
    let student = {
      name : "Rahul",
      age : 25,
      score: 99,
      pass: true
    }

    for(let i in student){
        console.log(i, "value:", student[i]);
    }
}


// PRACTICE QUESTIONS 1
function evenNum(){
    let n =0;
    for(let i =0; i<=100; i++){      
        
        if (i%2==0) {
            console.log(i); 
        }             
    }
};
function oddNum(){
    let n =0;
    for(let i =0; i<=100; i++){      
        
        if (i%2!==0) {
            console.log(i); 
        }             
    }
}

// PRACTICE QUESTIONS 2

function guessNum(){
    let secret = prompt("Enter the secret number");
    let guess = prompt("Enter the guess number");
   while (guess!==secret) {
    guess = prompt("Wrong answer! Try again!!");
   }
   alert("Congratulations!! Your answer is correct")
//    console.log("Congratulations!! Your answer is correct");
}
