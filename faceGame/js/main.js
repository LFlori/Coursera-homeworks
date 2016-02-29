var theLeftSide = document.getElementById("leftSide");
var numberOfFaces = 5;
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
theBody.onclick = gameOver;
const MAX_WIDTH = 400;
const MAX_HEIGHT = 400;
const IMAGE_LOCATION = "./img/smile.png";


function createLevel() {
    generateFaces();
    var leftSideImages = generateRightSideImages();
    theLeftSide.lastChild.onclick = nextLevel;
    leftSideImages.removeChild(leftSideImages.lastChild);
}
function generateFaces() {
    for (var i = 0; i < numberOfFaces; i++) {

        var img = document.createElement("img");
        img.src = IMAGE_LOCATION;
        img.style.left = parseInt(Math.random() * MAX_WIDTH) + "px";
        img.style.top = parseInt(Math.random() * MAX_HEIGHT) + "px";

        theLeftSide.appendChild(img);
    }
}
function generateRightSideImages() {
    var leftSideImages = theLeftSide.cloneNode(true);
    theRightSide.appendChild(leftSideImages);
    return leftSideImages;
}
function nextLevel(event) {
    event.stopPropagation();
    createLevel();
}
function gameOver() {
    alert("Game Over!");
    theLeftSide.lastChild.onclick = null;
    var playAgain = confirm("Do you want to play again?");
    if(playAgain){
        removeChildren(theLeftSide);
        removeChildren(theRightSide);
        createLevel();
    }
    else {
        theBody.onclick = null;
        removeChildren(theBody);
        theBody.style.backgroundColor = "orange";
        var h1 = document.createElement("h1");
        var text = document.createTextNode("See you next time!");
        h1.appendChild(text);
        h1.style.color = "black";
        h1.style.textAlign = "center";
        document.body.appendChild(h1);

    }
}

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


