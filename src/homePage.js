//******************************************************************************BUILD HOME PAGE
function buildHome() {
    buildBlank()
    addElement(homeContainer);
}

homeButton.onclick = function() {buildHome()};
buildHome();
