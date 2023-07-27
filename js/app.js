const switchElements = document.querySelectorAll(".switch")

const nr1 = document.querySelector(".nr1")
const nr2 = document.querySelector(".nr2")
const nr3 = document.querySelector(".nr3")


switchElements.forEach(function (switchElement) {
    switchElement.addEventListener("click", function () {
        this.classList.toggle("on");


        if (switchElement.classList.contains("on") && switchElement.id === "mySwitch1") {
            nr1.style.backgroundColor = "green"
        }
        if (switchElement.classList.contains("on") && switchElement.id === "mySwitch2") {
            nr2.style.backgroundColor = "purple"
        }
        if (switchElement.classList.contains("on") && switchElement.id === "mySwitch3") {
            nr3.style.backgroundColor = "orange"
        }
        if (!switchElement.classList.contains("on") && switchElement.id === "mySwitch1") {
            nr1.style.backgroundColor = ""
        }
        if (!switchElement.classList.contains("on") && switchElement.id === "mySwitch2") {
            nr2.style.backgroundColor = ""
        }
        if (!switchElement.classList.contains("on") && switchElement.id === "mySwitch3") {
            nr3.style.backgroundColor = ""
        }
    });

})