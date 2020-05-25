//******************************************************************************CORE
const homeSubHeader = document.getElementById('homeSubHeader');
const homeButton = document.getElementById('homeButton');
const homeContainer = document.getElementById('home');

const aboutButton = document.getElementById('aboutButton');
const aboutSubHeader = document.getElementById('aboutSubHeader');
const aboutMeContainer = document.getElementById('aboutMe');

const projectsContainer = document.getElementById('projects');
const projectsSubHeader = document.getElementById('projectsSubHeader');
const projectsButton = document.getElementById('projectsButton');


function addElement(elmt) {
    elmt.style.display = '';
}
function removeElement(elmt) {
    elmt.style.display = 'none';
}

function buildBlank() {

    removeElement(homeSubHeader);
    removeElement(homeContainer);

    removeElement(aboutSubHeader);
    removeElement(aboutMeContainer);

    removeElement(projectsContainer);
    removeElement(projectsSubHeader);
}
//******************************************************************************
