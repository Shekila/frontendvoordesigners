
var section = document.querySelector("section");
var requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

//JSON wordt ingeladen
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "json";
request.send();
console.log("request", request);

request.onload = function () {
    populateSection(request.response);
    console.log(request.response);
}

// Functie van films
function populateSection(json0bj) {
    console.log("function populateSection", json0bj);

    // Elementen die aan de HTML worden gekoppeld
    var titel = document.createElement("h2");
    var img = document.createElement("img");
    var plot = document.createElement("p");
    var button = document.createElement("button");

    var titel1 = document.createElement("h2");
    var img1 = document.createElement("img");
    var plot1 = document.createElement("p");
    var button1 = document.createElement("button");

    var titel2 = document.createElement("h2");
    var img2 = document.createElement("img");
    var plot2 = document.createElement("p");
    var button2 = document.createElement("button");

    var titel3 = document.createElement("h2");
    var img3 = document.createElement("img");
    var plot3 = document.createElement("p");
    var button3 = document.createElement("button");

    var titel4 = document.createElement("h2");
    var img4 = document.createElement("img");
    var plot4 = document.createElement("p");
    var button4 = document.createElement("button");

    var titel5 = document.createElement("h2");
    var img5 = document.createElement("img");
    var plot5 = document.createElement("p");
    var button5 = document.createElement("button");

    // JSON wordt aan de HTML gekoppeld, films komen uit array
    titel.textContent = json0bj[0].title;
    img.setAttribute("src", json0bj[0].cover);
    plot.textContent = "Plot: " + json0bj[0].simple_plot;
    button.textContent = ("Save");

    titel1.textContent = json0bj[1].title;
    img1.setAttribute("src", json0bj[1].cover);
    plot1.textContent = "Plot: " + json0bj[1].simple_plot;
    button1.textContent = ("Save");

    titel2.textContent = json0bj[2].title;
    img2.setAttribute("src", json0bj[2].cover);
    plot2.textContent = "Plot: " + json0bj[2].simple_plot;
    button2.textContent = ("Save");

    titel3.textContent = json0bj[3].title;
    img3.setAttribute("src", json0bj[3].cover);
    plot3.textContent = "Plot: " + json0bj[3].simple_plot;
    button3.textContent = ("Save");

    titel4.textContent = json0bj[4].title;
    img4.setAttribute("src", json0bj[4].cover);
    plot4.textContent = "Plot: " + json0bj[4].simple_plot;
    button4.textContent = ("Save");

    titel5.textContent = json0bj[5].title;
    img5.setAttribute("src", json0bj[5].cover);
    plot5.textContent = "Plot: " + json0bj[5].simple_plot;
    button5.textContent = ("Save");


    // Elementen worden toegevoegd aan de section in de HTML
    section.appendChild(titel);
    section.appendChild(img);
    section.appendChild(plot);
    section.appendChild(button);

    section.appendChild(titel1);
    section.appendChild(img1);
    section.appendChild(plot1);
    section.appendChild(button1);

    section.appendChild(titel2);
    section.appendChild(img2);
    section.appendChild(plot2);
    section.appendChild(button2);

    section.appendChild(titel3);
    section.appendChild(img3);
    section.appendChild(plot3);
    section.appendChild(button3);

    section.appendChild(titel4);
    section.appendChild(img4);
    section.appendChild(plot4);
    section.appendChild(button4);

    section.appendChild(titel5);
    section.appendChild(img5);
    section.appendChild(plot5);
    section.appendChild(button5);
}


