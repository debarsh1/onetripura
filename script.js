function showContactForm() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out to us! We will get back to you shortly.");
    this.reset();
});
