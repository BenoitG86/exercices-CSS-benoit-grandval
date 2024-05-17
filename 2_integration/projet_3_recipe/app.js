const buttonAccess = document.getElementById("buttonAccess");
buttonAccess.addEventListener('click', toggleAccess);

function toggleAccess() {
      document.body.classList.toggle('dys');
      var titles = Array.from(document.getElementsByClassName('titles'));
      titles.forEach(title => title.classList.toggle('dys'));
}