const CONFIG = {
    INSTAGRAM_URL: "https://instagram.com/dryfroots.official",
    WHATSAPP_NUMBER: "919876543210", // Bina '+' ke country code ke saath
    CONTACT_NUMBER: "+919876543210",
    PRODUCT_CATALOGUE_URL: "assets/catalogue.pdf" // PDF ka path ya link
};

// HTML Links ko update karne ka function
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("link-instagram").href = CONFIG.INSTAGRAM_URL;
    document.getElementById("link-whatsapp").href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}`;
    document.getElementById("link-contact").href = `tel:${CONFIG.CONTACT_NUMBER}`;
    document.getElementById("link-catalogue").href = CONFIG.PRODUCT_CATALOGUE_URL;
});