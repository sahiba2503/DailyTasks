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

createBtn.addEventListener("click", function () {
  let currentTaskvalue = taskName.value;
  let currentTaskDueDate = taskDueDate.value;
  let currentTaskCreateDate = new Date().toDateString();

  if (currentTaskvalue && currentTaskDueDate) {
    var currentTaskDetail = {
      taskName: currentTaskvalue,
      taskCreateDate: currentTaskCreateDate,
      taskDueDate: currentTaskDueDate,
      taskStatus: "active",
    };
    activeTasks.push(currentTaskDetail);
    taskName.value = "";
    taskDueDate.value = "";
    let active = "active";
    taskCreated(activeTaskList, activeTasks, active, activeTaskList);
  }
});

// function taskCreated(currentTask, currentTaskArr, active, currentTaskList) {
//   currentTask.innerHTML = "";
//   for (let i = 0; i < currentTaskArr.length; i++) {
//     if (currentTaskArr[i].taskStatus === active) {
//       taskDetail(currentTaskArr, i);
//     }
//   }
// }
function taskCreated(currentTask, currentTaskArr, active, currentTaskList) {
  currentTask.innerHTML = "";

  for (let i = 0; i < currentTaskArr.length; i++) {
    if (currentTaskArr[i].taskStatus === active) {
      taskDetail(currentTaskArr, i, currentTaskList);
    }
  }
}

function taskDetail(currentTaskArr, i, currentTaskList) {
  currentTaskList.insertAdjacentHTML(
    "beforeend",
    `
      <li class="taskListItemDetails"> 
      <span>${currentTaskArr[i].taskName}</span>
      <span>${currentTaskArr[i].taskCreateDate}</span>
      <span>${currentTaskArr[i].taskDueDate}</span>
      <span>${currentTaskArr[i].taskStatus}<span>
      <span>${"-^-"}</span>
      <span>${"->-"}</span>
      <span>${"-<-"}</span>
      <span>${"-X-"}</span>     
      </li> 
      `,
  );
}
