// On DOM loaded
window.addEventListener("DOMContentLoaded", () => {
    // Get all elements with "skate-type" attribute
    const buttons = document.querySelectorAll("[skate-type]");
    buttons.forEach(button => {
        const skateType = button.getAttribute("skate-type");
        const paliatech = {
            email: "paliatech.devs@outlook.com",
            phone: "5016063532"
        }
        let hrefValue = "";
        
        if (skateType.includes("email")) {
            hrefValue += "mailto:" + paliatech.email;

            // Extra conditions
            if (skateType.includes("quote")) {
                hrefValue += "?subject=Inquiry&body=I%20would%20like%20A%20free%20quote%20MY%20DETAILS%20HERE";
            }
            else if (skateType.includes("email")) {
                hrefValue += "?subject=Inquiry&body=I%20would%20like%20to%20schedule%20A%20meeting.%20MY%20DETAILS%20HERE";
            }
        }
        else if (skateType.includes("phone")) {
            hrefValue += "tel:" + paliatech.phone;
        }

        if (hrefValue != "") {
            button.href = hrefValue;
        }
    });
})


// Finished loading
window.addEventListener("load", () => {
    // Remove loading screen
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
});

let menuBtn = document.getElementById('menu-btn');
let linkBox = document.querySelector('nav > .links');
menuBtn.addEventListener('change', () => {
    if (menuBtn.checked) {
        linkBox.classList.add('show');
    } else {
        linkBox.classList.remove('show');
        // Do something when unchecked
    }
});