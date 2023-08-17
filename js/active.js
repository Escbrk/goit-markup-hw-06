const buttons = document.querySelectorAll('.list-btn');
const pages = document.querySelectorAll('.services-item');

buttons.forEach(button => {
  button.addEventListener("click", e => {
    buttons.forEach(button => {
      button.classList.remove("active-button");
    })
    e.target.classList.add("active-button");
    pages.forEach(project => {
      let type = project.querySelector('.services-text').innerText;
if (type.indexOf(e.target.innerText.slice(0, -1)) >= 0 || e.target.innerText == 'All') {
  project.classList.remove('visually-hidden');
} else {
  project.classList.add('visually-hidden');
}
    });
  })
})