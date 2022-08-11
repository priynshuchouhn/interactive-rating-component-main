const mainContainer = document.querySelector(".container-1");
const secondContainer = document.querySelector(".container-2");
const submitButton = document.getElementById("submit")

const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".button")

submitButton.addEventListener("click",() => {
    secondContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
})

rates.forEach((rate)=>{
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})