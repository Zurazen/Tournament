// ======================
// COUNTDOWN TOURNAMENT
// ======================

const tournamentDate = new Date("June 15, 2026 19:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = tournamentDate - now;

    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}, 1000);


// ======================
// SCROLL ANIMATION
// ======================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


const hiddenElements = document.querySelectorAll(
    ".team-card, .result-card, .info-card, .round"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});


// ======================
// NAVBAR SCROLL EFFECT
// ======================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,.9)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow =
            "0 5px 25px rgba(255,215,0,.15)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.padding = "25px 8%";
        navbar.style.boxShadow = "none";

    }

});


// ======================
// SMOOTH ACTIVE MENU
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// ======================
// MATCH HIGHLIGHT
// ======================

const rows = document.querySelectorAll("tbody tr");

rows.forEach((row, index) => {

    setTimeout(() => {

        row.style.transition = ".5s";
        row.style.boxShadow =
            "0 0 20px rgba(255,215,0,.25)";

        setTimeout(() => {

            row.style.boxShadow = "none";

        }, 2000);

    }, index * 600);

});


// ======================
// GOLD PARTICLES
// ======================

function createParticle() {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * window.innerWidth + "px";

    particle.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    particle.style.opacity =
        Math.random();

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 6000);

}

setInterval(createParticle, 500);


// ======================
// HERO TEXT ANIMATION
// ======================

const heroTitle = document.querySelector(".hero-content h1");

heroTitle.style.opacity = "0";
heroTitle.style.transform = "translateY(40px)";

setTimeout(() => {

    heroTitle.style.transition = "1s";
    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0px)";

}, 300);


// ======================
// TEAM SEARCH
// ======================

const teamCards =
document.querySelectorAll(".team-card");

console.log(
    "Tournament Loaded Successfully"
);


// ======================
// PRELOADER FAKE
// ======================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ======================
// CHAMPION GLOW EFFECT
// ======================

const champion =
document.querySelector(".winner");

setInterval(() => {

    champion.style.transform = "scale(1.05)";

    setTimeout(() => {

        champion.style.transform = "scale(1)";

    }, 500);

}, 1500);


// ======================
// CONSOLE MESSAGE
// ======================

console.log(`
🏆 RED GOLD CHAMPIONSHIP
🔥 Powered by GitHub Pages
👑 Esports Tournament System
`);
