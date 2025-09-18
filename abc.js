function  validateForm()
{
    var email=document.myform.email.value;
    var password=document.myform.password.value;
    if(email==null||email=="")


{
alert("email can't be blank");
return false;
}
elseif(password.length<6)

{
alert("password must be at least 6 characters long.");
return false;
}


{
return true;
}
}
