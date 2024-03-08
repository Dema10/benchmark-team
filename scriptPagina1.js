// vado a puntare la checkbox
let check = document.getElementById("checkbox");
// vado a puntare il button Proceed
let button = document.getElementById("nascondi");

// creo un addeventlistener al click di checkbox per far si che che compaia il bottone
checkbox.addEventListener("click", function () {
  button.classList.toggle("procedi");
  toggleAnimation();
});

function toggleAnimation() {
  var button = document.getElementById('nascondi');

  // Rimuovi le classi di animazione precedenti
  button.classList.remove('procedi-apri', 'procedi-chiudi');

  // Aggiungi la classe procedi-rotola per far apparire il bottone rotolando
  button.classList.add('procedi-rotola');

  // Ascolta l'evento di fine animazione 'animationend'
  button.addEventListener('animationend', function() {
      // Rimuovi la classe procedi-rotola
      button.classList.remove('procedi-rotola');

      // Aggiungi la classe procedi-pulsa per far pulsare il bottone
      button.classList.add('procedi-pulsa');
  });
};