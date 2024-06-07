// Loops in JavaScript
// 1. for loop

function textPrint(){
    let n = prompt("Enter a number");
    for (let i = 1; i <= n; i++) {
      console.log("Hello JavaScript");
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