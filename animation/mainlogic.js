const box = document.getElementById("box");
const button = document.getElementById("zoomBtn");

button.addEventListener("click", function(){

    box.classList.add("zoom");

    setTimeout(function(){

        box.classList.remove("zoom");

    },500);

});