var favOS = prompt("what is your favorite OS for mobiles? choose between Android or IOS")

while(favOS != "Android" && favOS != "IOS"){
  favOS = prompt("Sorry, your choice is not exist, only choose between Android and IOS.")
}

var numOfvOS = prompt("How many " + favOS + " picture do you want to see? from 1-5")

while(numOfvOS > 5 || numOfvOS < 1){
  numOfvOS = prompt("Please select from 1-5")
}

function AndroidImage(){
   return"<img  src='https://2k7p22nx6oe213gsh48gkhoz-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/bigstock-Android-Logo-On-Digital-Tablet-79211521-900x490.jpg' width='180' height='100'     />"
}

function IOSImage(){
   return"<img  src='https://read.os-cdn.com/wp-content/uploads/2020/01/%D9%86%D8%B8%D8%A7%D9%85-ios.jpg' width='180' height='100'     />"
}

if(favOS == "Android"){
alert("Ok, welcome")
for(var i = 1; i <= numOfvOS; i++){
document.write("<div>" + "<h3>" + favOS+"</h3>"
+ document.write(AndroidImage()) + "</div>")}
}
else if (favOS =="IOS"){
alert("Ok, welcome")
for(var i = 1; i <= numOfvOS; i++){
document.write("<div>" + "<h3>" + favOS+"</h3>"
+ document.write(IOSImage()) + "</div>")}
}