import contactMe from "../html/contactMe.html";


//add logos social media
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedIn.png";

//forward to according social media
function addSocialMedia() {
    document.querySelectorAll(".address a")
        .forEach(a => a.addEventListener("click", socialMedia));

    function socialMedia(event) {
        if (event.target.className === "facebook") {
            window.open("https://www.facebook.com/dirk.vangorp.50", "_blank");
        }
        window.open("https://www.linkedin.com/in/dirk-van-gorp-17b35431/", "_blank");
    }
}

//get contactform when buttonclick
document.querySelector(".form-inline button")
    .addEventListener("click", getContactForm);

function getContactForm(event) {
    event.preventDefault();
    let contactPage = event.target.textContent.toLowerCase();

    if (contactPage === "contact me") {
        document.getElementById("content").innerHTML = contactMe;
        document.getElementsByTagName("img")[0].src = facebook;
        document.getElementsByTagName("img")[1].src = linkedin;
        addSocialMedia();
    }
}

