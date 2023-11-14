import { pageLoad } from "./homepage";
import { menuPageLoad } from "./menupage";
import { contactPageLoad } from "./contactpage";
import "./styles.css";

const page = document.getElementById('content');
let { header, body } = pageLoad();

page.appendChild(header);
page.appendChild(body);

document.getElementById("home-button").addEventListener('click', function () {

    page.removeChild(page.lastChild);
    let { header, body } = pageLoad();
    page.appendChild(body);
});

document.getElementById("menu-button").addEventListener('click', function () {

    page.removeChild(page.lastChild);
    let body = menuPageLoad();
    page.appendChild(body);
});

document.getElementById("contact-button").addEventListener('click', function () {

    page.removeChild(page.lastChild);
    let body = contactPageLoad();
    page.appendChild(body);
});