var password = "ABCDEF";
var input = prompt("Enter Password : ","");
if(input.length == 0){
    while (input.length <= 0)
    {
        alert("Password Field Cannot Be LEFT EMPTY");
        var input = prompt("Enter Password : ","");
    }
}
if(password == input)
{
    alert("Correct! The password you entered matches the original password");
}
else
{
    alert("Incorrect Password");
}