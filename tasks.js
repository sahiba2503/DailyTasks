let backlog = document.querySelector(".backlogStatus");
let active = document.querySelector(".activeStatus");
let progress = document.querySelector(".progressStatus");
let complete = document.querySelector(".completeStatus");
let expire = document.querySelector(".expireStatus");

let taskName = document.querySelector(".taskName");
let taskDueDate = document.querySelector(".taskDueDate");
let createBtn = document.querySelector(".createButton");

let activeTaskList = document.querySelector(".activeTaskList");
  
let backlogTasks = [];
let activeTasks = [];
let progressTasks = [];
let completedTasks = [];
let expireTasks = [];

createBtn.addEventListener("click",function(){
    let currentTaskvalue = taskName.value;
    let currentTaskDueDate = taskDueDate.value;
    let currentTaskCreateDate = new Date().toDateString();
    
      if(currentTaskvalue && currentTaskDueDate){
         var currentTaskDetail = {taskName:currentTaskvalue,
          taskCreateDate:currentTaskCreateDate,
           taskDueDate:currentTaskDueDate ,
           taskStatus:"active"};
        activeTasks.push(currentTaskDetail);
            taskName.value="";
            taskDueDate.value="";
            taskCreated();
      }
})

function taskCreated(){
  activeTaskList.innerHTML = "";
  for(let i=0; i<activeTasks.length; i++){
    if(activeTasks[i].taskStatus === "active"){
    activeTaskList.insertAdjacentHTML("beforeend",`
      <li class="taskListItemDetails"> 
      <span>${activeTasks[i].taskName}</span>
      <span>${activeTasks[i].taskCreateDate}</span>
      <span>${activeTasks[i].taskDueDate}</span>
      <span>${activeTasks[i].taskStatus}<span>
      </li> 
      `);
  }
}
}

