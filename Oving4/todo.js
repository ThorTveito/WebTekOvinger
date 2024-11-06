let tasks = []

window.addEventListener("DOMContentLoaded", function(){
    let inputField = document.getElementById("taskInput")
    inputField.focus()
    let submitButton = document.getElementById("addTaskBtn")
    submitButton.addEventListener("click", addTask)
})




function addTask(){
    let inputField = document.getElementById("taskInput")
    let list = document.getElementById("todoList")
    
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = "checkbox"
    

    let task = document.createElement("p")
    task.innerText = inputField.value

    let listTask = document.createElement("li")

    if (task.innerText != ""){
        listTask.appendChild(checkbox)
        listTask.appendChild(task)
        list.insertBefore(listTask, list.firstChild)
        
        inputField.value = ""
        
        let taskObj = {
            todoText: task.innerText
        }
        tasks.push(taskObj)
        console.log(tasks)
        let checkCheckbox = document.getElementById("checkbox")
        checkCheckbox.addEventListener("change", lineThrough)
        keepTrack()
    }
    
}


function lineThrough(e){
    let checkedContent = e.target
    let taskText = checkedContent.nextElementSibling
    
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through"
    } else {
         taskText.style.textDecoration = "none"
    }
    keepTrack()
}

function keepTrack(){
    let todoNodes = document.querySelectorAll("li")
    let totalTask = todoNodes.length
    let finishedTask = 0
    let counter = document.getElementById("counter")

    for (let i = 0; i < totalTask; i++){
        if (todoNodes[i].firstChild.checked){
            finishedTask = finishedTask + 1
        }
    }

    counter.innerHTML = finishedTask + "/" +totalTask+" Completed"

}