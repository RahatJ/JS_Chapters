// TASK NO:1
// var f_name= prompt("Enter your first name")
// var l_name= prompt("Enter your last name")
// var fullname= f_name + " " +l_name;
// alert(fullname)


// TASK NO:2
// var mobphone= prompt("Name your favourite mobile phone")
// document.write("My favourite phone is: "+mobphone)
// var length= mobphone.length
// document.write("<br>")
// document.write("Length of String: "+length)


// TASK NO:3
// var str= "Pakistani"
// document.write("String: "+str)
// var n= str.indexOf("n");
// document.write("<br>")
// document.write("Index of 'n': "+n)


// TASK NO:4
// var str= "Hello World"
// document.write("String: "+str)
// var n= str.lastIndexOf("l");
// document.write("<br>")
// document.write("Last Index of 'l': "+n)


// TASK NO:5
// var str= "Pakistani"
// document.write("String: "+str)
// var n= str.charAt(3);
// document.write("<br>")
// document.write("Charcter at index 3: "+n)

// TASK NO:6
// var f_name= prompt("Enter your first name")
// var l_name= prompt("Enter your last name")
// var fullname= f_name.concat(" " + l_name);
// alert(fullname)


// TASK NO:7
// var str="Hyderabad";
// document.write("City: "+str)
// var str1=str.replace("Hyder","Islam")
// document.write("<br>")
// document.write("After replacement: "+str1)


// TASK NO:8
// var message="Rahat and Sumayya are best friends. They play ludo and domino together"
// document.write("Message: "+message)
// var str1=str.replace("Hyder","Islam")
// document.write("<br>")
// document.write("After replacement: "+str1)

//task 9:
// var str="472";
// var typeStr=typeof(str);
// var num=parseInt(str);
// var typeNum=typeof(num);
// document.write("Value: "+str+"<br>Type:"+typeStr+"<br>Value: "+num+"<br>Type: "+typeNum); 

//task 10:
// var input=prompt("Entre your favourite fruit..");
// var cap_input=input.toUpperCase();
// document.write("User input: "+input+"<br>Upper case: "+cap_input);

//task 11:
// var input=prompt("Entre your favourite fruit..");
// var firstChar=input.slice(0,1);
// var otherTxt=input.slice(1);
// var otherTxtCap=otherTxt.toLowerCase()
// var firstCharCap=firstChar.toUpperCase();
// document.write("User input: "+input+"<br>Upper case: "+firstCharCap+otherTxtCap);

//Task 12:
// var num=35.36;
// var str=num.toString();
// var type1=typeof(str);
// document.write("Number: "+str+"<br>");
// var first=str.slice(0,2);
// var dot=str.slice(3);
// document.write("result: "+first+dot);
 
//task 13:
// var userName=prompt("Entre your name..");
// for (var i=0;i<=userName.length;i++){
//     if(userName[i]==="," || userName[i]==="." || userName[i]==="@" || userName[i]==="!"){
//     alert("Please entre a valid name");
//     break;
//     }
// }
// document.write("<h1>"+userName+"</h1>");

// tas 14:

// var array=["cake","apple pie","cookie","chips","patties"]
// var fav=prompt("Entre your favourite item");
// var a=fav.toLowerCase();
// for(var i=0;i<=array.length;i++){
//     if(a===array[i]){
        
//         alert(a+" is available at index "+i+" in our bakery");
        
        
//     }     
// }

// alert(fav+"Not available");

//Task 15
//  var inputTxt = (prompt("Enter Password"));
//  var a=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
// if(inputTxt.value.matches(a)) 
// {
//     alert("Success");
// }
// else{
//     alert("Please enter a valid password");
// }


//Task 16
// var university="University of Karachi";
// var arr=university.split();
// for(var i=0;i<university.length;i++){
//     document.write(university[i]+"<br>");

// }

//task 17:
// var country="Pakistan";
// var lasChar=country.slice(-1);
// document.write("User Input: "+country+"<br>Last Character of input: "+ lasChar);

 // //Task 18
// var txt = "The quick brown fox jumps over the lazy dog";
// count= 0;
// for (var i = 0; i < txt.length; i++){
//     if(txt.charAt(i)==='c') {
//         count++;
//     }

// }
// document.write("The quick brown fox jumps over the lazy dog"  + "<br/>" + "There are"+ " " + count + " " + "occurence(s) of word 'the'");











