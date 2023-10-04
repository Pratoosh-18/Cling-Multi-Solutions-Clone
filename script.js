const menu = document.querySelectorAll(".list-item")
const mode = document.querySelector("#mode")
const banner = document.querySelector("#banner")
const footer = document.querySelector("#footer")
const contact = document.querySelector("#contact")
const workCard = document.querySelector("#workCard")
const service = document.querySelector("#service")

console.log(menu)
Array.from(menu).forEach((item) => {
    item.addEventListener("click", (e) => {

        if (e.target.innerHTML === "About us") {
            document.getElementById('aboutBox').scrollIntoView();
        }
        else if (e.target.innerHTML === "Services") {
            document.getElementById('servicesBox').scrollIntoView();
        }
        else if (e.target.innerHTML === "Clients") {
            document.getElementById('clientsBox').scrollIntoView();
        }
        else if (e.target.innerHTML === "Portfolio") {
            document.getElementById('portfolioBox').scrollIntoView();
        }
        else if (e.target.innerHTML === "Achievements") {
            document.getElementById('achievementsBox').scrollIntoView();
        }
        else if (e.target.innerHTML === "Team") {
            document.getElementById('teamBox').scrollIntoView();
        }
    })
})

mode.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        banner.style.backgroundColor = "black"
        footer.style.backgroundColor = "black"
        contact.style.backgroundColor = "white"
        workCard.style.color = "black"
        service.style.color = "white"

    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        banner.style.backgroundColor = "#f2f5f8"
        footer.style.backgroundColor = "#f2f5f8"
    }
})
