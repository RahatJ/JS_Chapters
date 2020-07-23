// TASK NO: 01
// var rightNow = new Date()

// time(rightNow)
// date(rightNow)

// function time(a)
// {   
//     document.write('<b>Current Time:</b> '+a.toLocaleTimeString()+'<br><br>')
// }

// function date(b)
// {
//     document.write('<b>Current Date:</b> '+ b.toLocaleDateString() +'<br><br>')
// }


// TASK NO:02
// function name()
// {
//     var firstName = prompt("Enter Your First Name","enter first name");
//     var lastName = prompt("Enter Your Last Name","enter last name");
// alert("Welcome " + " " +firstName+ " " +lastName)
// }
// name(2,3);



// TASK No: 03
// var num1 = parseInt(prompt('Enter first number:'))
// var num2 = parseInt(prompt('Enter second number:'))

// document.write(num1 +' + '+ num2 +' = '+ sum(num1,num2))

// function sum(num1,num2)
// {
//     add = num1+num2
//     return(add)
// }


// TASK NO:04
// Calculator()

// function Calculator()
// {
//     num1 = parseInt(prompt('Enter first number'))
//     num2 = parseInt(prompt('Enter second number'))
//     operator = prompt('Enter operation you want to perform')
//     if(operator == '+')
//     {
//         ans = addition(num1,num2)
//         document.write(num1 +' '+ operator +' '+ num2 +' = '+ans)
//     }
//     else if(operator == '-')
//     {
//         ans = subtraction(num1,num2)
//         document.write(num1 +' '+ operator +' '+ num2 +' = '+ans)
//     }
//     else if(operator == '*')
//     {
//         ans = multiplication(num1,num2)
//         document.write(num1 +' '+ operator +' '+ num2 +' = '+ans)
//     }
//     else if(operator == '/')
//     {
//         ans = division(num1,num2)
//         document.write(num1 +' '+ operator +' '+ num2 +' = '+ans)
//     }
//     else
//     {
//         document.write('Invalid operator')
//     }
// }

// function addition(a,b)
// {
//     add = a + b
//     return(add)
// }

// function subtraction(a,b)
// {
//     sub = a - b
//     return(sub)
// }

// function multiplication(a,b)
// {
//     mul = a * b
//     return(mul)
// }

// function division(a,b)
// {
//     div = a / b
//     return(div)
// }


// TASK NO: 05
// var num = parseInt(prompt('Enter number you want to square'))

// alert(num +'^2 ='+ square(num))

// function square(a)
// {
//     ans = a**2
//     return(ans)
// }


// TASK NO: 06
// var num = parseInt(prompt('Enter number'))
// alert(num +'! = '+ factorial(num))

// function factorial(a) 
// {
//     if (a == 0)
//     {
//         return 1
//     }
//     return a * factorial(a-1)
// }

// TASK No: 07
// counting()

// function counting()
// {
//     var start = parseInt(prompt('Enter Starting number'))
//     var end = parseInt(prompt('Enter Ending number'))
//     document.write('Counting from '+ start +' to '+ end +'<br >')
//     for(var i=start; i<=end; i++)
//     {
//         document.write(i + '<br>')
//     }
// }


// TASK No:08
// var perp = parseInt(prompt('Enter perpendicular of a triangle'))
// var base = parseInt(prompt('Enter base of a triangle'))

// alert(hypotenus(base,perp))

// document.write('H<sup>2</sup> = P<sup>2</sup> + B<sup>2</sup> <br>')
// document.write('H<sup>2</sup> = '+ perp +'<sup>2</sup> + '+ base +'<sup>2</sup> <br>')
// document.write('H<sup>2</sup> = '+ square(perp) +' + '+ square(base) + '<br>' )
// document.write('H<sup>2</sup> = '+ hypotenus(base,perp))

// function hypotenus(b,p)
// {
//     h = square(p) + square(b)
//     return(h)
// }

// function square(n)
// {
//     sqr = n**2
//     return(sqr)
// }


/Task 9 
// function areaRectangular(w,h,area){
//     var w,h,area;
//     area=w*h;
//     document.write("Area is" + " " + area);
// }
// areaRectangular(45,65);



// //Task 10
// function wordCheck() {
// var  wordUser = prompt("Enter Your word");
// var check = "";
// for (var i = wordUser.length - 1; i >= 0; i--) {
// check += wordUser[i]
// }
// if (wordUser === check){
//   alert(wordUser + " " + "is palindrome word")
// }
// }
// wordCheck();



// //Task 11
// function user() {
// var userText = (prompt("Input text"));
// var firstChar = userText.slice(0,1);
// var otherChar = userText.slice(1);
// firstChar = firstChar.toUpperCase()
// otherChar = otherChar.toLowerCase()

// var userText = firstChar + otherChar;
// alert(userText);
// }

// user();



// //Task 12 
// const str = 'Web Development Tutorial';
// const longestWord = (str) => {
// const strArray = str.split(' ');
// const sortedStrArray = strArray.sort(
//     (strA, strB) => {
//           return strB.length - strA.length;
//     }
// );
// return sortedStrArray;
// }
// alert(longestWord(str));



// //Task 13
// function txtcount(a = "JSResourceS.com" , count = 0) {
// for(var i = 0; i < a.length; i++) {
//     if(a.charAt(i) === 'c'){
//         count++;
//     }
// }

// alert(count);
// }
// txtcount();



// //Task 14

// function Circumference(radius,coc){
// coc=2*Math.PI*radius;
// document.write("The circumference is" + " " + coc + "<br/><br/>");
// }
// Circumference(45);

// function calcArea(radius,aoc){
//  var radius, aoc;
// aoc=Math.PI*radius*radius;
// document.write("The area is" + " " + aoc);
//  }
//  calcArea(45);




