document.write("<h1>Shopping Cart</h1>")
var price1=650
document.write("Price of item 1 is "+price1)
var quantity1= 3
document.write("<br>")
document.write("Quantity of item 1 is "+quantity1)
var cost1= price1 * quantity1
var price2=100
document.write("<br>")
document.write("Price of item 2 is "+price2)
var quantity2= 7
document.write("<br>")
document.write("Quantity of item 2 is "+quantity2)
var cost2= price2 * quantity2
var ShipChar= 100
document.write("<br>")
document.write("Shipping Charges "+ShipChar)
var TotalCost= cost1 + cost2 + ShipChar
document.write("<br>")
document.write("Total Cost of your order is "+TotalCost)
