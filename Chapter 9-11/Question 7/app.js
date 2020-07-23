document.write("<h1>Guess Game</h1>")
var num = 7;
var num = prompt("Guess the secret number")
if (num == 7){
    document.write("<br><br>")
    document.write("Bingo! Correct Answer")
}
else if(num == 8){
    document.write("<br>")
    document.write("Close enough to the correct answer")
}
else{
    document.write("<br>")
    document.write("Wrong Guess!")
}
