document.write("<h1>Marks Sheet</h1>")
document.write("<br><br>")
var marks1=prompt("Enter 1st subjrct marks")
var marks2=prompt("Enter 2nd subjrct marks")
var marks3=prompt("Enter 3rd subjrct marks")
var marks1=parseInt(marks1)
var marks2=parseInt(marks2)
var marks3=parseInt(marks3)
var Total_Marks= 300;
document.write("Total marks: "+Total_Marks)
var Marks_obtained = marks1 + marks2 + marks3;
document.write("<br>")
document.write("Marks Obtained: "+Marks_obtained)
var Per= (Marks_obtained/Total_Marks) * 100;
document.write("<br>")
document.write("Percentage: "+Per+ "%")

if(Per>=80){
    document.write("<br>");
    document.write("Grade: A-One");
    document.write("<br>");
    document.write("Remarks: Excellent");
}
else if(Per>=70){
    document.write("<br>");
    document.write("Grade: A");
    document.write("<br>");
    document.write("Remarks: Good");
}
else if(Per>=70){
    document.write("<br>");
    document.write("Grade: A");
    document.write("<br>");
    document.write("Remarks: Good");
}

else if(Per>=60){
    document.write("<br>");
    document.write("Grade: B");
    document.write("<br>");
    document.write("Remarks: You need to improve");
}

else{
    document.write("<br>");
    document.write("Grade: Fail");
    document.write("<br>");
    document.write("Remarks: Sorry");
}