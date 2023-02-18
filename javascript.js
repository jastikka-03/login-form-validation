function myfunc(){


var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var zipCode= document.getElementById("Zipcode").value;
var phoneNumber =document.getElementById("Phone number").value;




if (/^[a-zA-Z]{2,23}/.test(name)) {
    document.getElementById("name1").innerHTML = " "
} else {
    document.getElementById("name1").innerHTML = "charecter should be 2 to 23";
  
}


if (/[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
    document.getElementById("email1").innerHTML = " "
} else {
    document.getElementById("email1").innerHTML = "invalid email";

}
if (/^[10000-90000]/.test(zipCode)) {
    document.getElementById("zipcode").innerHTML = " "
} else {
    document.getElementById("zipcode").innerHTML = "invalid Zipcode";

}

if (/^\d{10}$/.test(phoneNumber)) {
    document.getElementById("phonenumber").innerHTML = " "
} else {
    document.getElementById("phonenumber").innerHTML = "phone number should be 10.";
    return false;
}


};





