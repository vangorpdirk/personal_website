import home from "../html/home.html";
import about from "../html/about.html";

import image_1 from "../images/head_dirk_2.png";
import image_about from "../images/head_dirk_5.png";


//start tab with active home
setTabContent(document.querySelector(".active a"));

//implement interactive navbar
document.querySelectorAll(".navbar a")
    .forEach(h => h.addEventListener("click", returnToHomePage));

document.querySelectorAll(".nav-item a")
    .forEach(a => a.addEventListener("click", setActiveMenu));

function returnToHomePage(event) {
    let homePage = event.target.textContent.toLowerCase();

    if (homePage === "vgd") {
        document.getElementById("content").innerHTML = home;
        document.getElementsByTagName("img")[0].src = image_1;
    }
}

function setActiveMenu(event) {
    let li = event.target.closest("li");

    if (li.classList.contains("active")) return;
    document.querySelector(".active")
        .classList
        .remove("active");
    li.classList
        .add("active");

    setTabContent(event.target);
}

function setTabContent(a) {
    let tab = a.textContent;
    let content = document.getElementById("content");

    switch (tab.toLowerCase().split(" ")[0]) {
        case "home":
            content.innerHTML = home;
            document.getElementsByTagName("img")[0].src = image_1;
            break;
        case "about":
            content.innerHTML = about;
            document.getElementsByTagName("img")[0].src = image_about;
            break;
    }
}

