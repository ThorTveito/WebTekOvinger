/* Task  1.2 */
console.log('Task  1.2')

for(let i = 1; i<=20; i++){
    console.log(i)
}

/* Task  1.3 */
console.log('Task  1.3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for(let i = 0;i<numbers.length;i++){
    number = numbers[i]
    if (number % 3 === 0 && number % 5 === 0){
        console.log("eplekake")
    }
    else if (number % 5 === 0){
        console.log("kake")
    }
    else if(number % 3 === 0){
        console.log("eple")
    }
    else{
        console.log(number)
    }
}



/* Task  1.4 */
let title = document.getElementById("title")
title.innerText = "Hello JavaScript"

/* Task  1.5 */
let div = document.getElementById("magic")
let buttonDisplay = document.getElementById("btnDisplay")
let buttonVisibility = document.getElementById("btnVisibility")
let buttonReset = document.getElementById("btnReset")




function changeDisplay () {
    console.log("changed display")
    div.style.display = "none"
}

function changeVisibility () {
    console.log("changed visibility")
    div.style.display = "block"
    div.style.visibility = "hidden"
}

function reset () {
    console.log("reset")
    div.style.display = "block"
    div.style.visibility = "visible"
}

buttonDisplay.addEventListener("click", changeDisplay)
buttonVisibility.addEventListener("click", changeVisibility)
buttonReset.addEventListener("click", reset)



/* Task 1.6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

let list = document.getElementById("tech")

for(i = 0; i<technologies.length;i++){
    console.log(technologies[i])
    let listNode = document.createElement("li")
    let listValue = document.createTextNode(technologies[i])
    listNode.appendChild(listValue)
    list.appendChild(listNode)
}
