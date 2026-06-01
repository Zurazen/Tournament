// =============================
// RED GOLD CHAMPIONSHIP V2
// =============================

// COUNTDOWN GRAND FINAL

const targetDate =
new Date("2026-06-15T20:00:00").getTime();

const days =
document.getElementById("days");

const hours =
document.getElementById("hours");

const minutes =
document.getElementById("minutes");

const seconds =
document.getElementById("seconds");

function updateCountdown(){

const now = new Date().getTime();

const distance = targetDate - now;

if(distance <= 0){

days.innerHTML = "00";
hours.innerHTML = "00";
minutes.innerHTML = "00";
seconds.innerHTML = "00";

return;
}

const d =
Math.floor(distance / (1000*60*60*24));

const h =
Math.floor(
(distance % (1000*60*60*24))
/
(1000*60*60)
);

const m =
Math.floor(
(distance % (1000*60*60))
/
(1000*60)
);

const s =
Math.floor(
(distance % (1000*60))
/
1000
);

days.innerHTML =
String(d).padStart(2,"0");

hours.innerHTML =
String(h).padStart(2,"0");

minutes.innerHTML =
String(m).padStart(2,"0");

seconds.innerHTML =
String(s).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);


// =============================
// NAVBAR SCROLL EFFECT
// =============================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,.95)";

navbar.style.boxShadow =
"0 10px 40px rgba(255,204,0,.08)";

}else{

navbar.style.background =
"rgba(0,0,0,.7)";

navbar.style.boxShadow =
"none";

}

});


// =============================
// SCROLL REVEAL
// =============================

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

const cards =
document.querySelectorAll(
".card,.team-card,.schedule-card,.round,.champion-card"
);

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});


// =============================
// ACTIVE MENU
// =============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
===
`#${current}`
){

link.classList.add("active");

}

});

});


// =============================
// HERO CARD FLOATING
// =============================

const heroCard =
document.querySelector(".hero-card");

if(heroCard){

setInterval(()=>{

heroCard.style.transform =
"translateY(-8px)";

setTimeout(()=>{

heroCard.style.transform =
"translateY(0px)";

},1200);

},2500);

}


// =============================
// CHAMPION GLOW
// =============================

const champion =
document.querySelector(".champion-card");

if(champion){

setInterval(()=>{

champion.style.boxShadow =
"0 0 40px rgba(255,204,0,.25)";

setTimeout(()=>{

champion.style.boxShadow =
"0 0 0 rgba(255,204,0,0)";

},1000);

},2000);

}


// =============================
// PARTICLES EFFECT
// =============================

function createParticle(){

const particle =
document.createElement("div");

particle.classList.add("particle");

particle.style.left =
Math.random()*100+"vw";

particle.style.animationDuration =
(Math.random()*4+4)+"s";

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},8000);

}

setInterval(createParticle,400);


// =============================
// MATCH HOVER EFFECT
// =============================

const matches =
document.querySelectorAll(".match-box");

matches.forEach(match=>{

match.addEventListener("mouseenter",()=>{

match.style.transform =
"translateX(8px)";

});

match.addEventListener("mouseleave",()=>{

match.style.transform =
"translateX(0px)";

});

});


// =============================
// TEAM CARD EFFECT
// =============================

const teams =
document.querySelectorAll(".team-card");

teams.forEach(team=>{

team.addEventListener("mousemove",()=>{

team.style.transform =
"translateY(-10px) scale(1.03)";

});

team.addEventListener("mouseleave",()=>{

team.style.transform =
"translateY(0px) scale(1)";

});

});


// =============================
// LOADED
// =============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

console.log(
"🏆 RED GOLD CHAMPIONSHIP V2 LOADED"
);

});
