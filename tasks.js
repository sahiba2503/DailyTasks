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

let DailyTasklist = JSON.parse(localStorage.getItem("DailyTasklist")) || [];
//here will use localStorage to manage task data instead of array.
let UpdatedTask = -1;

function saveTask() {
  localStorage.setItem("DailyTasklist", JSON.stringify(DailyTasklist));
}

createBtn.addEventListener("click", function () {
  let currentTaskvalue = taskName.value;
  let currentTaskDueDate = taskDueDate.value;
  let currentTaskCreateDate = new Date().toDateString();
       if (!currentTaskvalue || !currentTaskDueDate) {
    alert("Please fill all fields.");
    return;
  }
  if(UpdatedTask === -1){
    const currentTaskDetail = {
      taskName: currentTaskvalue,
      taskCreateDate: currentTaskCreateDate,
      taskDueDate: currentTaskDueDate,
      taskStatus: "active",
      taskUpdated:"No updated",
    };
    DailyTasklist.push(currentTaskDetail);
    saveTask();
      taskName.value = "";
    taskDueDate.value = "";
    taskCreated( );
  

}
  else{
     
      let newDate = new Date();
      let currDate = newDate.toDateString();

      DailyTasklist[UpdatedTask].taskName = taskName.value;
      DailyTasklist[UpdatedTask].taskDueDate = taskDueDate.value;
      DailyTasklist[UpdatedTask].taskUpdated = currDate;
      
   
  }
 saveTask();

UpdatedTask = -1;

taskName.value = "";
taskDueDate.value = "";

taskCreated();
});

function taskCreated() {
  activeTaskList.innerHTML = "";
   progressTaskList.innerHTML = "";
  completedTaskList.innerHTML = "";
  expireTaskList.innerHTML = "";
  backlogTaskList.innerHTML = "";
 
  for (let i = 0; i < DailyTasklist.length; i++) {
   if(DailyTasklist[i].taskStatus === "active"){
            displayTaskDetail(i,activeTaskList);
   }
    if(DailyTasklist[i].taskStatus === "progress"){
            displayTaskDetail(i,progressTaskList);
   }
    if(DailyTasklist[i].taskStatus === "completed"){
            displayTaskDetail(i,completedTaskList);
   }
    if(DailyTasklist[i].taskStatus === "expire"){
            displayTaskDetail(i,expireTaskList);
   }
    if(DailyTasklist[i].taskStatus === "backlog"){
            displayTaskDetail(i,backlogTaskList);
   }
      }
}
function displayTaskDetail(i,tasksList) {
  let task = DailyTasklist[i];
    tasksList.insertAdjacentHTML(
  "beforeend",
  `
    <li class="taskListItemDetails">
      <p><strong>Task Name:</strong> ${task.taskName}</p>
      <p><strong>Create Date:</strong> ${task.taskCreateDate}</p>
      <p><strong>Due Date:</strong> ${task.taskDueDate}</p>
      <p><strong>Status:</strong> ${task.taskStatus}</p>
      <p><strong>Updated:</strong> ${task.taskUpdated}</p>
      <span onclick="updateItem(${i})">⬆️</span>
      <span onclick="deleteItem(${i})">❌</span>
      <span onclick="moveNextItem(${i})">➡️</span>
      
    </li>
  `
);
<<<<<<< HEAD

 
}

=======
 
}
taskCreated();
//  <span >⬅️</span>
>>>>>>> everydayTasks
function updateItem(index) {
taskName.value = DailyTasklist[index].taskName;
taskDueDate.value = DailyTasklist[index].taskDueDate;
 UpdatedTask = index;
 
    
}
function deleteItem(index) {
   DailyTasklist.splice(index,1);
      saveTask();
     taskCreated();
}
const taskStatus=[
  "backlog","active","progress","completed","expire"
];

function moveNextItem(index) {
       let currentStatus = DailyTasklist[index].taskStatus;
       let currentIndex = taskStatus.indexOf(currentStatus);
       currentIndex++;
      if (currentIndex >= taskStatus.length) {
        currentIndex = 0;
    }
       DailyTasklist[index].taskStatus = taskStatus[currentIndex];
    saveTask();
       taskCreated();
}


