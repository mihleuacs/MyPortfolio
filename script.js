// TypeScript code to dynamically add skills to the Skills section
var skills = ['HTML', 'CSS', 'TypeScript', 'Angular', 'JavaScript', 'Bootstrap', 'MySql', 'MongoDB', 'MSSQL', 'Git', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD'];
var skillsList = document.getElementById('skillsList');
if (skillsList) {
    skills.forEach(function (skill) {
        var skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
}
// Add scroll animations to sections
var sections = document.querySelectorAll("section");
window.addEventListener("scroll", function () {
    sections.forEach(function (section) {
        var sectionTop = section.getBoundingClientRect().top;
        var triggerBottom = window.innerHeight / 1.2;
        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
        else {
            section.classList.remove("show");
        }
    });
});
