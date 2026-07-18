let backlog = document.querySelector(".backlogStatus");
let active = document.querySelector(".activeStatus");
let progress = document.querySelector(".progressStatus");
let complete = document.querySelector(".completeStatus");
let expire = document.querySelector(".expireStatus");

let taskName = document.querySelector(".taskName");
let taskDueDate = document.querySelector(".taskDueDate");
let createBtn = document.querySelector(".createButton");

let activeTaskList = document.querySelector(".activeTaskList");
let progressTaskList = document.querySelector(".progressTaskList");
let backlogTaskList = document.querySelector(".backlogTaskList");
let completedTaskList = document.querySelector(".completedTaskList");
let expireTaskList = document.querySelector(".expireTaskList");



let DailyTasklist = [];
let UpdatedTask = -1;


createBtn.addEventListener("click", function () {
  let currentTaskvalue = taskName.value;
  let currentTaskDueDate = taskDueDate.value;
  let currentTaskCreateDate = new Date().toDateString();
     if(UpdatedTask === -1){
  if (currentTaskvalue && currentTaskDueDate ) {
    var currentTaskDetail = {
      taskName: currentTaskvalue,
      taskCreateDate: currentTaskCreateDate,
      taskDueDate: currentTaskDueDate,
      taskStatus: "active",
    };
    DailyTasklist.push(currentTaskDetail);
    taskName.value = "";
    taskDueDate.value = "";
    taskCreated( );
  }
  else{
    return;
  }
}
  else{
     
      let newDate = new Date();
      let currDate = newDate.toDateString();
      DailyTasklist[UpdatedTask].taskName = taskName.value;
      DailyTasklist[UpdatedTask].taskDueDate = taskDueDate.value;
      DailyTasklist[UpdatedTask].taskCreateDate = currDate;
       taskCreated();
      taskName.value = "";
    taskDueDate.value = "";
     UpdatedTask = -1;
   
  }
});

function taskCreated() {
  activeTaskList.innerHTML = "";
 
  for (let i = 0; i < DailyTasklist.length; i++) {
   
    displayTaskDetail(i);
  }
}
function displayTaskDetail(i) {
  activeTaskList.insertAdjacentHTML(
    "beforeend",
    `
      <li class="taskListItemDetails"> 
      <span>${DailyTasklist[i].taskName}</span>
      <span>${DailyTasklist[i].taskCreateDate}</span>
      <span>${DailyTasklist[i].taskDueDate}</span>
      <span>${DailyTasklist[i].taskStatus}</span>     
      <span onclick="updateItem(${i})">⬆️</span>     
      <span onclick="deleteItem(${i})">❌</span>
      </li> 
      `,
  );
}
//  <span>➡️</span> <span >⬅️</span>
function updateItem(index) {
taskName.value = DailyTasklist[index].taskName;
taskDueDate.value = DailyTasklist[index].taskDueDate;
 UpdatedTask = index;
 
    
}
function deleteItem(index) {
   DailyTasklist.splice(index,1);
     taskCreated();
}