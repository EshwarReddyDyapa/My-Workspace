function testLengthFunction()
{
    var test = prompt("Enter a text");
    var charLength = test.length;
    var charRem = 140-charLength;
    alert("Char typed: " + charLength + ", Char remaining: " + charRem);
    testingSliceFunction(test);
}

function testingSliceFunction(inputString)
{
    //var inputString = prompt("Enter a paragraph");
    var allowedString = inputString.slice(0,140);
    alert(allowedString);
}

function characterCaseTestFunction()
{
    var name = prompt("Enter name");
    var finalNameString = (name.slice(0,1)).toUpperCase() + (name.slice(1)).toLowerCase();
    alert(finalNameString);
}

function getMilk(money) {   
    var bottles=0;
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    // bottles = money/1.5;
    // ~~ operator for Double NOT Bitwise - used as a substitute for math.floor operator
    // can use math.round function instead!
    bottles = ~~(money/1.5);
    console.log("Buy " + bottles + " bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  function getMilkWithReturn(money) {   
    var bottles=0;
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    // bottles = money/1.5;
    // ~~ operator for Double NOT Bitwise - used as a substitute for math.floor operator
    bottles = ~~(money/1.5);
    console.log("Buy " + bottles + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    console.log("Here's the change: " + calculateChange(money));
    
  }

  function calculateChange(money)
  {
    return money%1.5;
  }

  function BMICalculator(weight, height)
  {
    var bmi;
    bmi = Math.round((weight)/(height*height));
    console.log(bmi);
  }

  function ifStatementTesting(op1, op2, operator)
  {     
    // alert(op1);
    if(operator == "add")
        alert(Number(op1) + Number(op2));
    else if(operator == "sub")
        alert(op1 - op2);
    else if(operator == "mul")
        alert(op1 * op2);
    else
        alert(op1 / op2);
  }

  function isLeapYear(year)
  {
    if(year % 4 === 0)
    {
        console.log("year%4 is 0");
        if(year % 100 !== 0)
        {
            console.log("year%100 is not 0");
            alert("Leap year");
        }

        else if(year % 400 === 0)
        {
            console.log("Year%400 is zero");
            alert("Leap year");
        }
        else
        {
            console.log("Else 1");
            alert("Not Leap Year");
        }
    }
    else
        {
            console.log("Else 2");
            alert("Not Leap Year");
        }
  }

var numberArray = [];  
var numberToPush = 1;

function fizzBuzz()
    {
        var tempNumber = numberToPush;
        if((tempNumber%3 === 0) && (tempNumber%5 === 0))
        {
            numberArray.push("FizzBuzz");
        }
        else if(tempNumber % 3 === 0)
        {
            numberArray.push("Fizz");
        }
        else if(tempNumber % 5 === 0)
        {
            numberArray.push("Buzz");
        }
        else
        numberArray.push(numberToPush);
    numberToPush++;
    console.log(numberArray);
    }

function bottlesLoopFunction()
{
    var count1 = 99;
    var count2 = 98;

    while(count2 >= 2)
    {
        console.log(count1 + " bottles of beer on the wall, " + count1 + " bottles of beer.");
        console.log("Take one down and pass it around, " + count2 + " bottles of beer on the wall");
        console.log("");
        count1--;
        count2--;
    }

    console.log(count1 + " bottles of beer on the wall, " + count1 + " bottles of beer.");
    console.log("Take one down and pass it around, " + count2 + " bottle of beer on the wall");
    console.log("");

    console.log("No more bottles of beer on the wall, No more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
    console.log("");
    
}

function fibbonacciSeq(limit)
{
    var first = 0;
    var second = 1;
    var fibArray = new Array();
    if(limit == 1)
        fibArray.push(first);  
    // var fibArray = [first, second];
    else if(limit >= 2){
        fibArray.push(first);
        fibArray.push(second);
    }
    var next;
    for(var count = 3; count <=limit; count++)
    {
        next = first + second;
        first = second;
        second = next;

        fibArray.push(next);        
    }

    console.log(fibArray);
    }