const taskTitle = document.getElementById("taskTitle")

taskTitle.style.backgroundColor = "#234"
taskTitle.style.color = "#fff"
taskTitle.style.padding = "15px"
//taskTitle.style.display = "none"
//taskTitle.innerText = "List of Tasks"
taskTitle.innerHTML = `<span style="color: cyan;">List of Tasks</span>`
// üks element
let li = document.querySelector(".collection-item")

// muuda paaritute ridade taustad
li = document.querySelector(".collection-item:last-child")
// mitu elementi
const oddLi = document.querySelectorAll(".collection-item:nth-child(odd)")

/*for(let i = 0; i < oddLi.length; i++) {
    oddLi[i].style.background = "lightgray"
}*/

oddLi.forEach(function(li) { li.style.background = 'whitesmoke';})
let el = document.querySelector("ul").children[0].nextElementSibling
console.log(el)