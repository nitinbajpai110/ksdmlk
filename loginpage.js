
function validate(){

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var utype = document.getElementById("utype").value;
if (utype=="admin") {
	
}
if (utype=="faculty") {
	
}
if (utype=="student") {
	if (username=="11903748" && password=="lpu@123") {
		alert("Login Successful");
		window.location.href = "student home page.html";
	}
	 else {
		alert("Login unsuccessful please try again");

	}
}
}