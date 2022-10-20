
function addTask(e) {
    // get form input value
    let taskInput = document.querySelector("#task")
    // create new listitem with input value and X
    const listItem = document.createElement("li")
    listItem.appendChild(document.createTextNode(taskInput.value))
    listItem.className = "collection-item"
    const x = document.createElement("a")
    x.href = "#"
    x.className = "secondary-content"
    x.appendChild(document.createTextNode("X"))
    listItem.appendChild(x)
    // add to unordered list
    const ul = document.querySelector("ul")
    ul.appendChild(listItem)

    //console.log(listItem)

    // delete leftover input value from form
    taskInput.value = ""
    e.preventDefault()
}

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
let el = document.querySelector("ul")
//console.log(el)
let form = document.querySelector("#addTask")
form.addEventListener("submit", addTask)