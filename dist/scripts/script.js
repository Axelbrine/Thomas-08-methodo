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

// Gestionnaire de langue (déjà présent dans ton code)
document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
