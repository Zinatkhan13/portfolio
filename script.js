// ===== DARK / LIGHT MODE =====

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
toggleBtn.textContent = "☀️";
}else{
toggleBtn.textContent = "🌙";
}

});


// ===== BACK TO TOP BUTTON =====

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 200){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

};

topBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};

// ===== NAVBAR ACTIVE WHILE SCROLL =====

const sections = document.querySelectorAll("#about, #skills, #Education, #portfolio");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 200;
const sectionHeight = section.offsetHeight;

if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
currentSection = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + currentSection){
link.classList.add("active");
}

});

});


// ===== SKILLS ANIMATION ON SCROLL =====

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{
threshold:0.2
});

document.querySelectorAll(".item").forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});

// Typing Animation

const text = "Frontend Developer ";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,80);
}
}

typing();