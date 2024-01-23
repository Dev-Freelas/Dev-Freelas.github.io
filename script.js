AOS.init();

const contactForm = document.querySelector("#contact_form");
const sendContactFormBtn = document.querySelector("#btn_send");

function sendMail() {
    (function () {
        emailjs.init("D1Y5RpdMrX5s5LXT9");
    }());

    const params = {
        message: document.querySelector("#contact_message").value,
        sendername: document.querySelector("#contact_username").value,
        reply: document.querySelector("#contact_reply").value,
    }

    const service = "service_uc3x8hs";
    const template = "template_1c2x9hq";

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

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();
});