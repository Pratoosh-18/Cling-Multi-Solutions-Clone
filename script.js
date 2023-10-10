const menu = document.querySelectorAll(".list-item")
const mode = document.querySelector("#mode")
const banner = document.querySelector("#banner")
const footer = document.querySelector("#footer")
const contact = document.querySelector("#contact")
const workCard = document.querySelector("#workCard")
const allheader = document.querySelector("#allheader")
const serviceCardtext = document.querySelectorAll(".services-stats-card-text")
const listItem = document.querySelectorAll(".list-item")
const serviceCard = document.querySelectorAll(".services-stats-card")
const getstarted = document.querySelector("#getstarted")
const ourprojects = document.querySelector("#ourprojects")
const nav = document.querySelector("#nav")
const blogs = document.querySelector("#blogs")
const logostyle = document.querySelector("#logostyle")

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

getstarted.addEventListener("click", () => {
    document.getElementById('aboutBox').scrollIntoView();
})
ourprojects.addEventListener("click", () => {
    document.getElementById('portfolioBox').scrollIntoView();
})

mode.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        banner.style.backgroundColor = "black"
        footer.style.backgroundColor = "#2B3035"
        footer.style.color = "white"
        contact.style.backgroundColor = "white"
        workCard.style.color = "black"
        blogs.style.color = "white"
        allheader.style.backgroundColor = "#2B3035"
        logostyle.innerHTML = `<img src="logowhite.png" height="50px">`
        mode.innerHTML = "Light Mode"
        mode.style.color = "black"
        mode.style.backgroundColor = "white"
        nav.setAttribute("data-bs-theme", "dark");
        for (let i = 0; i < 8; i++) {
            listItem[i].style.color = "white"
        }
        for (let i = 0; i < 10; i++) {
            serviceCardtext[i].style.color = "white"
        }
        for (let i = 0; i < 10; i++) {
            serviceCard[i].style.boxShadow = "0 4px 8px 0 rgb(255, 255, 255, 0.2), 0 6px 20px 0 rgb(255, 255, 255, 0.19)"
        }

    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        banner.style.backgroundColor = "#f2f5f8"
        footer.style.backgroundColor = "#f2f5f8"
        footer.style.color = "black"
        allheader.style.backgroundColor = "white"
        blogs.style.color = "#555555"
        logostyle.innerHTML = `<img src="logo.png" height="50px">`
        mode.innerHTML = "Dark Mode"
        mode.style.color = "white"
        mode.style.backgroundColor = "black"
        nav.removeAttribute("data-bs-theme");
        for (let i = 0; i < 8; i++) {
            listItem[i].style.color = "#555555"
        }
        for (let i = 0; i < 10; i++) {
            serviceCardtext[i].style.color = "#444444"
        }
        for (let i = 0; i < 10; i++) {
            serviceCard[i].style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }

    }
})
