
function next(current, next) {
  document.getElementById(current).classList.remove('active');
  document.getElementById(current).classList.add('hidden');
  document.getElementById(next).classList.remove('hidden');
  document.getElementById(next).classList.add('active');
}
function finalStep() {
  document.getElementById('q3').classList.remove('active');
  document.getElementById('q3').classList.add('hidden');
  document.getElementById('final').classList.remove('hidden');
  document.getElementById('final').classList.add('active');
}
