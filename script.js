const menu = document.querySelectorAll(".list-item")
const mode = document.querySelector("#mode")
const banner = document.querySelector("#banner")
const footer = document.querySelector("#footer")
const contact = document.querySelector("#contact")
const workCard = document.querySelector("#workCard")
const allheader = document.querySelector("#allheader")

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
        a.style.color = "white";
        b.style.color = "white";
        c.style.color = "white";
        d.style.color = "white";
        e.style.color = "white";
        f.style.color = "white";
        g.style.color = "white";
        h.style.color = "white";

    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        banner.style.backgroundColor = "#f2f5f8"
        footer.style.backgroundColor = "#f2f5f8"
        allheader.style.backgroundColor = "white"
        a.style.color = "#555555";
        b.style.color = "#555555";
        c.style.color = "#555555";
        d.style.color = "#555555";
        e.style.color = "#555555";
        f.style.color = "#555555";
        g.style.color = "#555555";
        h.style.color = "#555555";
    }
})
