var A = [ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ] 

for(i=0; i<A.length; i++)
{
    for(j=0; j<A[i].length; j++)
    {
        document.write(A[i][j] + ' ')
    }
    document.write("<br>")
}