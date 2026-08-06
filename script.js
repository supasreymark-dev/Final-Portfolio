// console.log("hello world");

// alert("hello")

// const form = document.getElementById("emailFORM");

// form.addEventListener("submit", function(event){
    
//     event.preventDefault();

//     let emails = document.getElementById("email").value;
//     let names = document.getElementById("name").value;

//     alert("someone got emailed name is " + names + " email is " + emails);
// })



const form = document.getElementById("emailFORM");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("hello world");
    alert(`hi world `);
})

const anchors = document.querySelectorAll("a");

let anchorContainer;
let zoom = "zoom";


const projectsPointer = document.getElementById("projects-pointer");
const aboutMePointer = document.getElementById("about-me-pointer");
const skillsPointer = document.getElementById("skills-pointer");
const contactPointer = document.getElementById("contact-pointer");
const sendEmailBorder = document.getElementById("send-email-border");

const NavProj = document.getElementById("Nav-proj");
const NavAboutMe = document.getElementById("Nav-about-me");
const NavSkills = document.getElementById("Nav-skills");
const NavContact = document.getElementById("Nav-contact");
const NavSendEmail = document.getElementById("Nav-send-email");

function timer(variables){
    setTimeout(() => {
        variables.classList.remove("zoom");
    }, 500);
}

function printer(anchorTAG){
    // console.log(anchorTAG)
    if(anchorTAG == "PROJECTS"){
        console.log(`This is ${anchorTAG}`);
        projectsPointer.classList.add("zoom");
        timer(projectsPointer);
    }

    else if(anchorTAG == "ABOUT ME"){
        console.log(`This is ${anchorTAG}`);
        aboutMePointer.classList.add("zoom");
        timer(aboutMePointer);
    }

    else if(anchorTAG == "SKILLS"){
        console.log(`This is ${anchorTAG}`);
        skillsPointer.classList.add("zoom");
        timer(skillsPointer);
    }

    else if(anchorTAG == "CONTACT"){
        console.log(`This is ${anchorTAG}`);
        contactPointer.classList.add("zoom");
        timer(contactPointer);
    }

    else if(anchorTAG == "SEND EMAIL"){
        console.log(`This is ${anchorTAG}`);
        sendEmailBorder.classList.add("zoom");
        timer(sendEmailBorder);
    }

    else{
        console.log(`Nothing happen`);
    }
}

function logic(){
    anchors.forEach(function(a){
        a.addEventListener("click", function(event){
            anchorContainer = event.target.textContent;
            // console.log(anchorContainer);
            printer(anchorContainer);
        });
    });
}



logic();




// function zoomAnimation(){
    // logic();
// }

// anchors.forEach(function(a){
//     a.addEventListener("click", function(event){
//         console.log(event.target.textContent);
//     });
// });