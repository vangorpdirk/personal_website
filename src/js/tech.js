import tech from "../html/tech.html";


//add logos video_skills
import avid from "../images/avid_logo.png";
import photoshop from "../images/photoshop_logo.png";
import premiere from "../images/premiere_logo.png";

//add logos software_fields
import spring from "../images/spring_logo.png";
import sass from "../images/sass_logo.png";
import bootstrap from "../images/bootstrap_logo.png";
import webpack from "../images/webpack_logo.png";
import nodejs from "../images/nodejs_logo.png";
import linux from "../images/linux_logo.png";
import hibernate from "../images/hibernate_logo.png";
import html_css from "../images/html_css_js_logo.png";
import docker from "../images/docker_logo.png";

//get contactform when buttonclick
document.querySelector(".tech a")
    .addEventListener("click", getTechForm);

function getTechForm(event) {
    event.preventDefault();
    let techPage = event.target.textContent.toLowerCase();

    if (techPage === "tech") {
        document.getElementById("content").innerHTML = tech;
        document.getElementsByTagName("img")[0].src = avid;
        document.getElementsByTagName("img")[1].src = photoshop;
        document.getElementsByTagName("img")[2].src = premiere;
        document.getElementsByTagName("img")[3].src = spring;
        document.getElementsByTagName("img")[4].src = sass;
        document.getElementsByTagName("img")[5].src = bootstrap;
        document.getElementsByTagName("img")[6].src = webpack;
        document.getElementsByTagName("img")[7].src = nodejs;
        document.getElementsByTagName("img")[8].src = linux;
        document.getElementsByTagName("img")[9].src = hibernate;
        document.getElementsByTagName("img")[10].src = html_css;
        document.getElementsByTagName("img")[11].src = docker;
    }
}