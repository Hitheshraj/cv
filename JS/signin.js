
function message(){
let name,pasword,number;
name =document.getElementById("username").value;
pasword =document.getElementById("pasword").value;
number =document.getElementById("number").value;
localStorage.setItem("name1",name)
localStorage.setItem("pasword1",pasword)
localStorage.setItem("number1",number)
}