//******************************************************************************BUILD ABOUT PAGE

function buildAbout() {
    buildBlank();
    addElement(aboutMeContainer);
    addElement(aboutSubHeader);
    addElement(sideBarContainer);
}

aboutButton.onclick = function() {buildAbout()};
