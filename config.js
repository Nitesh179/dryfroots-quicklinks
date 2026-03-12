const CONFIG = {
    INSTAGRAM_URL: "https://instagram.com/dryfroots.official",
    WHATSAPP_NUMBER: "919202540083", 
    CONTACT_NUMBER: "+919202540083",
    PRODUCT_CATALOGUE_URL: "assets/catalogue.pdf" // PDF link update here
};

// HTML Links ko update karne ka function
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("link-instagram").href = CONFIG.INSTAGRAM_URL;
    document.getElementById("link-whatsapp").href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}`;
    document.getElementById("link-contact").href = `tel:${CONFIG.CONTACT_NUMBER}`;
    document.getElementById("link-catalogue").href = CONFIG.PRODUCT_CATALOGUE_URL;
});