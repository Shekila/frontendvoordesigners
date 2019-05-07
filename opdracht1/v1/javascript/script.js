/* (wanneer je de image in de button de id "save" geeft) */
/* function saveFilm() {
    var image = document.getElementById("save");
    if (image.src == "images/save.png") {
        image.src = "images/save.png";
    } else {
        image.src = "images/saved.png";
    }
}
var opgeslagen = document.getElementById("save");
opgeslagen.addEventListener("click", saveFilm); */


var saveButton = document.querySelectorAll(".save"); //All is belangrijk voor de loop

for (var opgeslagen of saveButton) { // for kan alleen door een lijst loopen
    opgeslagen.addEventListener("click", saveFilm);
}

/* opgeslagen is een variabele voor wat er in ".save" staat */

function saveFilm(e) {
    var image = e.target.children[0];
    image.src = "images/saved.png";
    console.log(image);
}

/* counter */
var result = 0;

document.getElementById("result").innerHTML = result;

function count() {
  result++;
  document.getElementById("result").innerHTML = result;
}
