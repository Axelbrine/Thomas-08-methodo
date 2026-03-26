// Fonction unique pour ouvrir n'importe quelle modale
function openModal(modalId) {
  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById(modalId).classList.add("is-visible");
}

// Fonction unique pour fermer TOUTES les modales ouvertes
function off() {
  document.getElementById("overlay").classList.remove("is-visible");
  // On cherche tous les éléments qui ont la classe 'is-visible' pour les cacher
  document.querySelectorAll(".is-visible").forEach(el => {
    el.classList.remove("is-visible");
  });
}

// Gestionnaire de langue
document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});


// ================================
// QUIZ PROTOTYPE
// ================================
 
const submitBtn = document.querySelector('.quiz-card__submit');
const nextBtn   = document.querySelector('.quiz-card__next');
const quizCard  = document.querySelector('.quiz-card');
const options   = document.querySelectorAll('.quiz-option');
const radios    = document.querySelectorAll('input[type="radio"][name="answer"]');
 
// Active le bouton submit dès qu'une option est sélectionnée
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    submitBtn.removeAttribute('disabled');
  });
});
 
// Submit : révèle les états correct / wrong
submitBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return;
 
  // Bloque toutes les interactions
  quizCard.classList.add('quiz-card--submitted');
 
  options.forEach(option => {
    const isCorrect = option.dataset.correct === 'true';
    const isSelected = option.querySelector('input').value === selected.value;
 
    if (isCorrect) {
      option.classList.add('quiz-option--correct');
    } else if (isSelected) {
      option.classList.add('quiz-option--wrong');
    }
  });
 
  // Swap submit → next
  submitBtn.style.display = 'none';
  nextBtn.classList.add('is-visible');
});
 
// NEXT
nextBtn.addEventListener('click', () => {
  alert("Oups, j\'ai pas fais la suite :D");
});
