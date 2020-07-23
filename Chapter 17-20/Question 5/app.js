var fruits = ["apple","banana","mango","orange","strawberry"]
var j = 0
for(i=0; i<fruits.length; i++)
{
    j=i+1
    document.write("<br>"+ j +". "+ fruits[i])
}
document.write("<br>")
for(i=0; i<fruits.length; i++)
{
    document.write("<br>Element at index "+ fruits.indexOf(fruits[i]) +" is "+ fruits[i])

}