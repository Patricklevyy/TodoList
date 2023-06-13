// Attendez que le document soit entièrement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Obtenez les références des éléments HTML nécessaires
    var plusButton = document.querySelector(".plus");
    var inputField = document.querySelector("#name");
    var printTaskSection = document.querySelector(".print-task");

    // Restaurer les tâches depuis le stockage local
    restoreTasks();

    // Ajoutez un gestionnaire d'événement au clic sur le bouton "+"
    plusButton.addEventListener("click", function() {
      // Récupérez la valeur de l'entrée de texte
      var taskName = inputField.value;

      // Vérifiez si le champ d'entrée est vide
      if (taskName !== "") {
        // Créez un élément de paragraphe pour afficher le contenu de la tâche
        var taskParagraph = document.createElement("p");
        taskParagraph.textContent = taskName;

        // Ajoutez le paragraphe à la section "print-task"
        printTaskSection.appendChild(taskParagraph);

        // Enregistrez la tâche dans le stockage local
        saveTask(taskName);

        // Effacez le contenu de l'entrée de texte
        inputField.value = "";
      }
    });

    // Restaurer les tâches depuis le stockage local
    function restoreTasks() {
      var tasks = localStorage.getItem("tasks");

      if (tasks) {
        tasks = JSON.parse(tasks);

        // Ajouter les tâches au DOM
        tasks.forEach(function(task) {
          var taskParagraph = document.createElement("p");
          taskParagraph.textContent = task;
          printTaskSection.appendChild(taskParagraph);
        });
      }
    }

    // Enregistrer la tâche dans le stockage local
    function saveTask(task) {
      var tasks = localStorage.getItem("tasks");

      if (tasks) {
        tasks = JSON.parse(tasks);
      } else {
        tasks = [];
      }

      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });
