
function getTasksFromLS() {
    let tasks
    if (localStorage.getItem("tasks") === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    return tasks
}

function addTaskToLS(task) {
    let tasks = getTasksFromLS()
    tasks.push(task)
    //console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function deleteTaskFromLS(task) {
    let tasks = getTasksFromLS()
    tasks.forEach((t, i) => {
        if (t === task) {
            tasks.splice(i, 1)
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function addAllTasksFromLS(e) {
    let tasks = getTasksFromLS()
    tasks.forEach((t) => {
        // create new listitem with input value and X
        const listItem = document.createElement("li")
        listItem.appendChild(document.createTextNode(t))
        listItem.className = "collection-item"
        const x = document.createElement("a")
        x.href = "#"
        x.className = "secondary-content"
        x.appendChild(document.createTextNode("X"))
        listItem.appendChild(x)
        // add to unordered list
        const ul = document.querySelector("ul")
        ul.appendChild(listItem)
    })
    patternize()
}

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

    // save task value to LocalStorage
    addTaskToLS(taskInput.value)

    // delete leftover input value from form
    taskInput.value = ""
    patternize()
    e.preventDefault()
}

function deleteAllTasks(e) {
    // confirm action
    let confirmed = confirm("Are you sure you want to delete all tasks?")
    if (confirmed) {
        par = document.querySelector("#taskList")
        while (par.firstChild) {
            par.removeChild(par.firstChild)

        }
        localStorage.removeItem("tasks")
    }
}

function deleteTask(e) {
    if (e.target.textContent === "X") {
        // confirm action
        let confirmed = confirm("Are you sure you want to delete this task?")
        if (confirmed) {
            e.target.parentElement.remove()
            let task = e.target.parentElement.textContent
            task = task.slice(0, task.length - 1)
            deleteTaskFromLS(task)
        }
    }
    patternize()
}

function patternize() {

// üks element
    let li = document.querySelector(".collection-item")

// muuda paaritute ridade taustad
    li = document.querySelector(".collection-item:last-child")
// mitu elementi
    const oddLi = document.querySelectorAll(".collection-item:nth-child(odd)")
    const evenLi = document.querySelectorAll(".collection-item:nth-child(even)")

    /*for(let i = 0; i < oddLi.length; i++) {
        oddLi[i].style.background = "lightgray"
    }*/

    oddLi.forEach(function(li) { li.style.background = 'whitesmoke';})
    evenLi.forEach(function(li) { li.style.background = 'white';})
}

const taskTitle = document.getElementById("taskTitle")

taskTitle.style.backgroundColor = "#234"
taskTitle.style.color = "#fff"
taskTitle.style.padding = "15px"
//taskTitle.style.display = "none"
//taskTitle.innerText = "List of Tasks"
taskTitle.innerHTML = `<span style="color: cyan;">List of Tasks</span>`

// event listeners
let form = document.querySelector("#addTask")
form.addEventListener("submit", addTask)
let ul = document.querySelector("#taskList")
ul.addEventListener("click", deleteTask)
let da = document.querySelector("#deleteAll")
da.addEventListener("click", deleteAllTasks)
document.addEventListener("DOMContentLoaded", addAllTasksFromLS)