// console.log("hello world");

// alert("hello")

// const form = document.getElementById("emailFORM");

// form.addEventListener("submit", function(event){
    
//     event.preventDefault();

//     let emails = document.getElementById("email").value;

// })



// const form = document.getElementById("emailFORM");

// form.addEventListener("submit", function(event){

//     event.preventDefault();

//     alert("hello world");
//     alert(`hi world `);
// })

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


const emailForm = document.getElementById("emailFORM");

const name = document.getElementById("name");
const email = document.getElementById("email");
const emailMessage = document.getElementById("emailMessage");
const sendMail = document.getElementById("sendEmail");


emailForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const visitorName = name.value;
    const visitorEmail = email.value;
    const message = emailMessage.value;
    
    alert("hello world");

    if(visitorName.trim() != "" && visitorEmail.trim() != "" && message.trim() != ""){
        try{
            const response = await fetch("http://127.0.0.1:8000/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    name: visitorName,
                    email: visitorEmail,
                    message: message
                })
            });

            const data = await response.json();

            if(!response.ok){
                throw new Error(data.detail || "Failed to send Email");
            }

            if(data.success){
                alert("EMAIL HAS BEEN SUCCESSFULLY SENT!");
            }
        }catch(error){
            alert("Oops! Message has not been sent. Please try again!");
        }
    }

    else{
        alert("Oops! Something went wrong! Either the server is not active or a technical error.");
    }
});