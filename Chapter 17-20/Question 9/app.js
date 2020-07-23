var A = [24, 53, 78, 91, 12] 
document.write("Array items: "+ A +"<br>")
var smallest = 10000000
for(i=0; i<=A.length; i++)
{
    if(A[i]<smallest)
    {
        smallest = A[i]
    }
}
document.write("The Smallest number is "+ smallest)