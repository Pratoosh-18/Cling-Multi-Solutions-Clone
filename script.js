const menu=document.querySelectorAll(".list-item")

console.log(menu)
Array.from(menu).forEach((item)=>{
    item.addEventListener("click",(e)=>{

        if(e.target.innerHTML === "About us"){
            document.getElementById('aboutBox').scrollIntoView();
        }
        else if(e.target.innerHTML === "Services"){
            document.getElementById('servicesBox').scrollIntoView();
        }
        else if(e.target.innerHTML === "Clients"){
            document.getElementById('clientsBox').scrollIntoView();
        }
        else if(e.target.innerHTML === "Portfolio"){
            document.getElementById('portfolioBox').scrollIntoView();
        }
        else if(e.target.innerHTML === "Achievements"){
            document.getElementById('achievementsBox').scrollIntoView();
        }
        else if(e.target.innerHTML === "Team"){
            document.getElementById('teamBox').scrollIntoView();
        }
    })
})