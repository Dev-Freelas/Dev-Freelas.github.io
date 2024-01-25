AOS.init();

const headerBtn = document.querySelector("#mobile-button");
const headerNav = document.querySelector("header nav");
const headerNavA = document.querySelectorAll("header nav a");

const contactForm = document.querySelector("#contact_form");
const sendContactFormBtn = document.querySelector("#btn_send");

function sendMail() {
    (function () {
        emailjs.init("76FkiK-jhrAPfEU9b");
    }());

    const service = "service_6j8htku";
    const template = "template_65bu28c";

    const params = {
        message: document.querySelector("#contact_message").value,
        sendername: document.querySelector("#contact_username").value,
        reply: document.querySelector("#contact_reply").value,
    }

    emailjs.send(service, template, params)
        .then(res => {
            sendContactFormBtn.textContent = "Mensagem enviada";
        })
        .catch(err => {
            console.error(err);
            sendContactFormBtn.textContent = "Erro ao enviar mensagem";
        });

    contactForm.reset();
}

function toggleHeader() {
    headerNav.classList.toggle("active");
}

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();
});

headerNavA.forEach(element => {
    element.addEventListener("click", function () {
        headerNav.classList.remove("active");
    });
});

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();
});

headerBtn.addEventListener("click", toggleHeader);