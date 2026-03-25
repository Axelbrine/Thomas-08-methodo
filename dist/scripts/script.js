function on() {
  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById("modal-profile").classList.add("is-visible");
}
function off() {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("modal-profile").classList.remove("is-visible");
}

document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});