function buildProjects() {
    buildBlank();
    addElement(projectsSubHeader);
    addElement(projectsContainer);
}

projectsButton.onclick = function() {buildProjects()};
