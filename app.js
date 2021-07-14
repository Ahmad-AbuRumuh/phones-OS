var favOS = prompt("what is your favorite OS for mobiles?")


if(favOS == "Android"){
document.write(alert("Ok, welcome") +
  "<div>" + "<h3>" + favOS+"</h3>"
+ "<img  src='https://2k7p22nx6oe213gsh48gkhoz-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/bigstock-Android-Logo-On-Digital-Tablet-79211521-900x490.jpg' width='180' height='100'     />" + "</div>")
}
else if (favOS =="IOS"){
document.write(alert("Ok, welcome") +
  "<div>" + "<h3>" + favOS+"</h3>"
+ "<img  src='https://read.os-cdn.com/wp-content/uploads/2020/01/%D9%86%D8%B8%D8%A7%D9%85-ios.jpg' width='180' height='100'     />" + "</div>")
}

else{
  alert('Sorry, this OS isnt exist here')
}