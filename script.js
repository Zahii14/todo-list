// select html elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// check if js is working

// console.log(taskInput);
// console.log(addBtn);
// console.log(taskList);

//listen for button click

function addTask()
{

    //get text from input
    const task = taskInput.value.trim();

    //check if input is empty
    if(task === "")
    {
        alert("Please enter a task!");
        return;
    }

    //create a new <li>
    const li = document.createElement("li");

    //put the task text inside it

    li.textContent = task;

    //add <li> to the <ul>

    taskList.appendChild(li);

    //clear the input
    taskInput.value = "";
    taskInput.focus();
}

//button click
addBtn.addEventListener("click" , addTask);

//enter key
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});




