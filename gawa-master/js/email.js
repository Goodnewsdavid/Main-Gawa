const contactForm = document.querySelector("#contact_form");
contactMessage = document.querySelector("#contact-message");


contactForm.addEventListener("submit", sendEmail)

const serviceID = "service_mtdfzzx";
const templateID = "template_yny0yji";
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(serviceID, templateID, contactForm).then(
    () => {
      contactMessage.textContent = "Message Sent Successfully ✅";

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 3000);

      contactForm.reset();
    },
    () => {
      contactMessage.textContent = "Message not sent (service error) ❌";
    }
  );
}