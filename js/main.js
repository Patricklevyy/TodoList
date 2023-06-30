// function afficherHeure() {
//   var date = new Date();
//   var options = { hour: 'numeric', minute: 'numeric' };
//   var heureActuelle = date.toLocaleTimeString(undefined, options);

//   return heureActuelle;
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var plusButton = document.querySelector(".plus");
//   var inputField = document.querySelector("#name");
//   var houre_style = document.querySelector(".print_hour");

//   plusButton.addEventListener("click", function () {
//     var taskName = inputField.value;

//     if (taskName !== "") {
//       var taskSection = document.createElement("section");
//       taskSection.className = "print-task";

//       var taskParagraph = document.createElement("p");
//       var heureMarquage = afficherHeure();
//       taskParagraph.textContent = taskName + " (" + heureMarquage + ")";
//       taskParagraph.style.marginLeft = "20px";
//       taskParagraph.className = "heure-color"; // Ajout de la classe CSS

//       taskSection.appendChild(taskParagraph);

//       var createTaskSection = document.querySelector(".create-task");
//       createTaskSection.parentNode.insertBefore(taskSection, createTaskSection.nextSibling);

//       inputField.value = "";
//     }
//   });
// });

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write a task!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '<i class="fas fa-trash"></i>';
    li.appendChild(span);

  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTAsk() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTAsk();