document.addEventListener("DOMContentLoaded", function () {
  // Obtenez les références des éléments HTML nécessaires
  var plusButton = document.querySelector(".plus");
  var inputField = document.querySelector("#name");

  // Ajoutez un gestionnaire d'événement au clic sur le bouton "+"
  plusButton.addEventListener("click", function () {
    // Récupérez la valeur de l'entrée de texte
    var taskName = inputField.value;

    // Vérifiez si le champ d'entrée est vide
    if (taskName !== "") {
      // Créez un nouvel élément de section pour la tâche
      var taskSection = document.createElement("section");
      taskSection.className = "print-task";

      // Créez un nouvel élément de paragraphe pour afficher le contenu de la tâche
      var taskParagraph = document.createElement("p");
      taskParagraph.textContent = taskName;
      taskParagraph.style.marginLeft = "20px";


      // Ajoutez le paragraphe à la section de tâche
      taskSection.appendChild(taskParagraph);

      // Obtenez la référence de la section "create-task"
      var createTaskSection = document.querySelector(".create-task");

      // Insérez la nouvelle section de tâche après la section "create-task"
      createTaskSection.parentNode.insertBefore(taskSection, createTaskSection.nextSibling);

      // Effacez le contenu de l'entrée de texte
      inputField.value = "";
    }
  });
});
