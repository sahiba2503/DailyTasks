let backlog = document.querySelector(".backlogStatus");
let active = document.querySelector(".activeStatus");
let progress = document.querySelector(".progressStatus");
let complete = document.querySelector(".completedStatus");
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
  if (currentTaskvalue.trim() && currentTaskDueDate.trim() ) {
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
   progressTaskList.innerHTML = "";
  completedTaskList.innerHTML = "";
  expireTaskList.innerHTML = "";
  backlogTaskList.innerHTML = "";
 
  for (let i = 0; i < DailyTasklist.length; i++) {
   if(DailyTasklist[i].taskStatus == "active"){
            displayTaskDetail(i,activeTaskList);
   }
    if(DailyTasklist[i].taskStatus == "progress"){
            displayTaskDetail(i,progressTaskList);
   }
    if(DailyTasklist[i].taskStatus == "completed"){
            displayTaskDetail(i,completedTaskList);
   }
    if(DailyTasklist[i].taskStatus == "expire"){
            displayTaskDetail(i,expireTaskList);
   }
    if(DailyTasklist[i].taskStatus == "backlog"){
            displayTaskDetail(i,backlogTaskList);
   }
      }
}
function displayTaskDetail(i,tasksList) {
  tasksList.insertAdjacentHTML(
    "beforeend",
    `
      <li class="taskListItemDetails"> 
      <span>${DailyTasklist[i].taskName}</span>
      <span>${DailyTasklist[i].taskCreateDate}</span>
      <span>${DailyTasklist[i].taskDueDate}</span>
      <span>${DailyTasklist[i].taskStatus}</span>     
      <span onclick="updateItem(${i})">⬆️</span>     
      <span onclick="deleteItem(${i})">❌</span>
      <span onclick="moveNextItem(${i})">➡️</span>
      </li> 
      `,
  );
 
}
//  <span >⬅️</span>
function updateItem(index) {
taskName.value = DailyTasklist[index].taskName;
taskDueDate.value = DailyTasklist[index].taskDueDate;
 UpdatedTask = index;
 
    
}
function deleteItem(index) {
   DailyTasklist.splice(index,1);
    taskName.value = "";
    taskDueDate.value = "";
     taskCreated();
}
function moveNextItem(i){
  if(DailyTasklist[i].taskStatus === "active"){
DailyTasklist[i].taskStatus="progress";

  }
   else if(DailyTasklist[i].taskStatus === "progress"){
DailyTasklist[i].taskStatus="completed";

  }
  else if(DailyTasklist[i].taskStatus === "completed"){
DailyTasklist[i].taskStatus="expire";

  }
  else if(DailyTasklist[i].taskStatus === "backlog"){
DailyTasklist[i].taskStatus="active";

  }
else if (DailyTasklist[i].taskStatus === "expire") {
    DailyTasklist[i].taskStatus = "backlog";
}
taskCreated();

}


