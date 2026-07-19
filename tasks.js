// let backlog = document.querySelector(".backlogStatus");
// let active = document.querySelector(".activeStatus");
// let progress = document.querySelector(".progressStatus");
// let complete = document.querySelector(".completedStatus");
// let expire = document.querySelector(".expireStatus");

// let taskName = document.querySelector(".taskName");
// let taskDueDate = document.querySelector(".taskDueDate");
// let createBtn = document.querySelector(".createButton");

<<<<<<< HEAD
let activeTaskList = document.querySelector(".activeTaskList");
=======
// let activeTaskList = document.querySelector(".activeTaskList");
// let progressTaskList = document.querySelector(".progressTaskList");
// let backlogTaskList = document.querySelector(".backlogTaskList");
// let completedTaskList = document.querySelector(".completedTaskList");
// let expireTaskList = document.querySelector(".expireTaskList");

// let DailyTasklist = [];
// let UpdatedTask = -1;
>>>>>>> everydayTasks

// createBtn.addEventListener("click", function () {
//   let currentTaskvalue = taskName.value;
//   let currentTaskDueDate = taskDueDate.value;
//   let currentTaskCreateDate = new Date().toDateString();
//      if(UpdatedTask === -1){
//   if (currentTaskvalue.trim() && currentTaskDueDate.trim() ) {
//     var currentTaskDetail = {
//       taskName: currentTaskvalue,
//       taskCreateDate: currentTaskCreateDate,
//       taskDueDate: currentTaskDueDate,
//       taskStatus: "active",
//     };
//     DailyTasklist.push(currentTaskDetail);
//     taskName.value = "";
//     taskDueDate.value = "";
//     taskCreated( );
//   }

// }
//   else{
     
//       let newDate = new Date();
//       let currDate = newDate.toDateString();
//       DailyTasklist[UpdatedTask].taskName = taskName.value;
//       DailyTasklist[UpdatedTask].taskDueDate = taskDueDate.value;
//       DailyTasklist[UpdatedTask].taskCreateDate = currDate;
//        taskCreated();
//       taskName.value = "";
//     taskDueDate.value = "";
//      UpdatedTask = -1;
   
//   }
// });

// function taskCreated() {
//   activeTaskList.innerHTML = "";
//    progressTaskList.innerHTML = "";
//   completedTaskList.innerHTML = "";
//   expireTaskList.innerHTML = "";
//   backlogTaskList.innerHTML = "";
 
//   for (let i = 0; i < DailyTasklist.length; i++) {
//    if(DailyTasklist[i].taskStatus == "active"){
//             displayTaskDetail(i,activeTaskList);
//    }
//     if(DailyTasklist[i].taskStatus == "progress"){
//             displayTaskDetail(i,progressTaskList);
//    }
//     if(DailyTasklist[i].taskStatus == "completed"){
//             displayTaskDetail(i,completedTaskList);
//    }
//     if(DailyTasklist[i].taskStatus == "expire"){
//             displayTaskDetail(i,expireTaskList);
//    }
//     if(DailyTasklist[i].taskStatus == "backlog"){
//             displayTaskDetail(i,backlogTaskList);
//    }
//       }
// }
// function displayTaskDetail(i,tasksList) {
//   tasksList.insertAdjacentHTML(
//     "beforeend",
//     `
//       <li class="taskListItemDetails"> 
//       <span>${DailyTasklist[i].taskName}</span>
//       <span>${DailyTasklist[i].taskCreateDate}</span>
//       <span>${DailyTasklist[i].taskDueDate}</span>
//       <span>${DailyTasklist[i].taskStatus}</span>     
//       <span onclick="updateItem(${i})">⬆️</span>     
//       <span onclick="deleteItem(${i})">❌</span>
//       <span onclick="moveNextItem(${i})">➡️</span>
//       </li> 
//       `,
//   );
 
// }
// //  <span >⬅️</span>
// function updateItem(index) {
// taskName.value = DailyTasklist[index].taskName;
// taskDueDate.value = DailyTasklist[index].taskDueDate;
//  UpdatedTask = index;
 
    
// }
// function deleteItem(index) {
//    DailyTasklist.splice(index,1);
//      taskCreated();
// }
// function moveNextItem(i){
//   if(DailyTasklist[i].taskStatus=="active"){
// DailyTasklist[i].taskStatus="progress";

//   }
//   else if(DailyTasklist[i].taskStatus=="progress"){
// DailyTasklist[i].taskStatus="completed";

//   }
//   else if(DailyTasklist[i].taskStatus=="completed"){
// DailyTasklist[i].taskStatus="expire";

//   }
//   else if(DailyTasklist[i].taskStatus=="backlog"){
// DailyTasklist[i].taskStatus="active";

//   }
// else if (DailyTasklist[i].taskStatus == "expire") {
//     DailyTasklist[i].taskStatus = "backlog";
// }
// taskCreated();

// }
// -------------------- Select Elements --------------------

const taskName = document.querySelector(".taskName");
const taskDueDate = document.querySelector(".taskDueDate");
const createBtn = document.querySelector(".createButton");

const backlogTaskList = document.querySelector(".backlogTaskList");
const activeTaskList = document.querySelector(".activeTaskList");
const progressTaskList = document.querySelector(".progressTaskList");
const completedTaskList = document.querySelector(".completedTaskList");
const expireTaskList = document.querySelector(".expireTaskList");

// -------------------- Variables --------------------

const statusOrder = [
    "backlog",
    "active",
    "progress",
    "completed",
    "expire"
];

let DailyTasklist = [];
let UpdatedTask = -1;

// -------------------- Create / Update Task --------------------

createBtn.addEventListener("click", () => {

    const name = taskName.value.trim();
    const dueDate = taskDueDate.value.trim();

    if (!name || !dueDate) return;

    if (UpdatedTask === -1) {

        DailyTasklist.push({
            taskName: name,
            taskCreateDate: new Date().toDateString(),
            taskDueDate: dueDate,
            taskStatus: "active"
        });

    } else {

        DailyTasklist[UpdatedTask].taskName = name;
        DailyTasklist[UpdatedTask].taskDueDate = dueDate;
        DailyTasklist[UpdatedTask].taskCreateDate = new Date().toDateString();

        UpdatedTask = -1;
    }

    taskName.value = "";
    taskDueDate.value = "";
<<<<<<< HEAD
    let active = "active";
    taskCreated();
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
  currentTask.innerHTML = "";

  for (let i = 0; i < DailyTasklist.length; i++) {
    if (DailyTasklist[i].taskStatus === active) {
      taskDetail(i);
    }
  }
}
  

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

function updateItem(index) {
taskName.value = DailyTasklist[index].taskName;
taskDueDate.value = DailyTasklist[index].taskDueDate;
<<<<<<< HEAD
    taskCreated();
}
function deleteItem(index) {
   DailyTasklist.splice(index,1);
    taskCreated();
}
=======
 UpdatedTask = index;
 
    
=======

    renderTasks();
});

// -------------------- Render Tasks --------------------

function renderTasks() {

    backlogTaskList.innerHTML = "";
    activeTaskList.innerHTML = "";
    progressTaskList.innerHTML = "";
    completedTaskList.innerHTML = "";
    expireTaskList.innerHTML = "";

    DailyTasklist.forEach((task, index) => {

        let list;

        switch (task.taskStatus) {

            case "backlog":
                list = backlogTaskList;
                break;

            case "active":
                list = activeTaskList;
                break;

            case "progress":
                list = progressTaskList;
                break;

            case "completed":
                list = completedTaskList;
                break;

            case "expire":
                list = expireTaskList;
                break;
        }

        list.insertAdjacentHTML(
            "beforeend",
            `
            <li class="taskListItemDetails">

                <span>${task.taskName}</span>
                <span>${task.taskCreateDate}</span>
                <span>${task.taskDueDate}</span>
                <span>${task.taskStatus}</span>

                <span onclick="updateItem(${index})">⬆️</span>
                <span onclick="deleteItem(${index})">❌</span>
                <span onclick="moveNextItem(${index})">➡️</span>

            </li>
            `
        );
    });
}

// -------------------- Update --------------------

function updateItem(index) {

    taskName.value = DailyTasklist[index].taskName;
    taskDueDate.value = DailyTasklist[index].taskDueDate;

    UpdatedTask = index;
>>>>>>> everydayTasks
}

// -------------------- Delete --------------------

function deleteItem(index) {
<<<<<<< HEAD
   DailyTasklist.splice(index,1);
     taskCreated();
}
>>>>>>> everydayTasks
=======

    DailyTasklist.splice(index, 1);

    if (UpdatedTask === index) {
        UpdatedTask = -1;
    }

    renderTasks();
}

// -------------------- Move Next --------------------

function moveNextItem(index) {

    const currentStatus = DailyTasklist[index].taskStatus;

    const currentIndex = statusOrder.indexOf(currentStatus);

    const nextIndex = (currentIndex + 1) % statusOrder.length;

    DailyTasklist[index].taskStatus = statusOrder[nextIndex];

    renderTasks();
}
>>>>>>> everydayTasks
