AOS.init();

const contactForm = document.querySelector("#contact_form");
const sendContactFormBtn = document.querySelector("#btn_send");

function sendMail() {
    (function () {
        emailjs.init("76FkiK-jhrAPfEU9b");
    }());

    const service = "service_6j8htku";
    const template = "template_65bu28c";
    const captchaToken = grecaptcha.getResponse();

    const params = {
        message: document.querySelector("#contact_message").value,
        sendername: document.querySelector("#contact_username").value,
        reply: document.querySelector("#contact_reply").value,
        "g-recaptcha-response": captchaToken,
    }

    emailjs.send(service, template, params)
        .then(res => {
            sendContactFormBtn.textContent = "Mensagem enviada";
        })
        .catch(err => {
            console.error(err);
            sendContactFormBtn.textContent = "Erro ao enviar mensagem";
        })
        .success(function () {
            setTimeout(function () {
                sendContactFormBtn.textContent = "Enviar serviço";
            }, 1000);
        });

    contactForm.reset();
}

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();
});