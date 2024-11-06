
const skills = ['HTML', 'CSS', 'TypeScript', 'Angular', 'JavaScript','Bootstrap','MySql','MongoDB','MSSQL','Git','Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD'];
const skillsList = document.getElementById('skillsList');

if (skillsList) {
  skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
  });
}

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight / 1.2;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
});
