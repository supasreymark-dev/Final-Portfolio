console.log("hello world");

alert("hello")

const form = document.getElementById("emailFORM");

form.addEventListener("submit", function(event){
    
    event.preventDefault();

    let emails = document.getElementById("email").value;
    let names = document.getElementById("name").value;

    alert("someone got emailed name is " + names + " email is " + emails);
})