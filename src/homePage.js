//******************************************************************************BUILD HOME PAGE
function buildHome() {
    buildBlank()
    addElement(homeContainer);
    addElement(backgroundContainer);
}

homeButton.onclick = function() {buildHome()};
buildHome();
