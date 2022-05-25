const toggleswitch = document.querySelector("input[type = 'checkbox']");
const toggleIcon = document.getElementById("toggle-icon");
const nav = document.getElementById("nav");
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Light and Dark Images
function imageMode(color){
    img1.src = `undraw_studying_${color}.svg`;
    img2.src = `undraw_conversation_${color}.svg`;
    img3.src = `undraw_feedback_${color}.svg`;
}

// Dark Mode
function DarkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0/50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255/50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageMode('dark');
}
// Light Mode
function LightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255/50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageMode('light');
}
// Switch Theme Dynamically
function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark');
        DarkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
        LightMode();
    }
}
// add event listener
toggleswitch.addEventListener('change',switchTheme);

// To retrieve local storage value and set the document to that mode
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleswitch.checked = true;
        DarkMode();
    }
}