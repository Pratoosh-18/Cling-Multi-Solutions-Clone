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

var a = document.getElementById("1");
var b = document.getElementById("2");
var c = document.getElementById("3");
var d = document.getElementById("4");
var e = document.getElementById("5");
var f = document.getElementById("6");
var g = document.getElementById("7");
var h = document.getElementById("8");

mode.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        banner.style.backgroundColor = "black"
        footer.style.backgroundColor = "black"
        contact.style.backgroundColor = "white"
        workCard.style.color = "black"
        allheader.style.backgroundColor = "#272727"
        for(let i=0;i<8;i++){
            listItem[i].style.color="white"
        }
        for(let i=0;i<10;i++){
            serviceCardtext[i].style.color="white"
        }
        for(let i=0;i<10;i++){
            serviceCard[i].style.boxShadow="0 4px 8px 0 rgb(255, 255, 255, 0.2), 0 6px 20px 0 rgb(255, 255, 255, 0.19)"
        }

    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        banner.style.backgroundColor = "#f2f5f8"
        footer.style.backgroundColor = "#f2f5f8"
        allheader.style.backgroundColor = "white"
        for(let i=0;i<8;i++){
            listItem[i].style.color="#555555"
        }
        for(let i=0;i<10;i++){
            serviceCardtext[i].style.color="#444444"
        }
        for(let i=0;i<10;i++){
            serviceCard[i].style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }
    }
})
