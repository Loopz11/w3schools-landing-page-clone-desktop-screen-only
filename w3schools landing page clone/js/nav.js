// login-signup button hover(nav part)
const logIn = document.querySelector(".log-in");
const loginSignupContainer = document.querySelector(".login-signup-container");

logIn.addEventListener("mouseover", ()=>{
    loginSignupContainer.style.backgroundColor = "#4CAF50";
});

logIn.addEventListener("mouseout", ()=>{
    loginSignupContainer.style.backgroundColor = "#d9eee1";
});


// lower nav bar scroll function
const languageList = document.querySelector(".language-list");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.style.display = "none";

let initialScrollValue = 0;
const addScrollValue = 400;
const maxScrollValue = languageList.scrollWidth - languageList.clientWidth;

right.addEventListener("click", ()=>{
    left.style.display = "block";
    initialScrollValue+=addScrollValue;
    if(initialScrollValue>maxScrollValue){
        right.style.display = "none";
        initialScrollValue = maxScrollValue;
    }
    console.log(languageList.scrollWidth);
    console.log(languageList.clientWidth);
    console.log(initialScrollValue);
    languageList.style.transform= `translateX(-${initialScrollValue}px)`;
});
left.addEventListener("click", ()=>{
    right.style.display = "block";
    initialScrollValue-=addScrollValue;
    if(initialScrollValue<0){
        initialScrollValue=0;
        left.style.display = "none";
    }
    languageList.style.transform= `translateX(-${initialScrollValue}px)`;
});


// dark mode lign mode
const lightDark = document.querySelector(".light-dark");
const imageHolder = document.querySelector(".image-holder");
const upperRightNavChilds = document.querySelectorAll(".upper-right-nav-childs");


lightDark.addEventListener("click", ()=>{
    const root = document.documentElement;
    if (lightDark.src.endsWith("dark-mode.png")){
        // changes background, text color suitable to dark mode
        root.style.setProperty("--dark-purple-bg-color", "#0d1721");
        root.style.setProperty("--how-to-bg-color", "#1d2a35");
        root.style.setProperty("--web-templates-bg-color", "#38444d");
        root.style.setProperty("--upper-nav-bg-color", "#1d2a35");
        root.style.setProperty("--black-text-to-white", "#ffff");
        root.style.setProperty("--demo-text-editor-inside-bg", "#15202b");
        root.style.setProperty("--how-to-stand-button-color", "#0d1721");

        // changes image to light mode
        lightDark.src = "resources/light-mode.png";

        // changes hover effect suitable to dark mode
        imageHolder.classList.remove("light");
        imageHolder.classList.add("dark");

        upperRightNavChilds.forEach( //used foreach as there are multiple elements with this class 
            (n)=>{
                n.classList.remove("light");
                n.classList.add("dark");
            }
        );


    } else if (lightDark.src.endsWith("light-mode.png")){
        // changes background, text color suitable to light mode
        root.style.setProperty("--dark-purple-bg-color", "#282a35");
        root.style.setProperty("--how-to-bg-color", "#ffff");
        root.style.setProperty("--web-templates-bg-color", "#e7e9eb");
        root.style.setProperty("--upper-nav-bg-color", "#ffff");
        root.style.setProperty("--black-text-to-white", "black");
        root.style.setProperty("--demo-text-editor-inside-bg", "#ffff");
        root.style.setProperty("--how-to-stand-button-color", "#282A35");

        // changes image to dark mode
        lightDark.src = "resources/dark-mode.png";

        // changes hover effect suitable to light mode
        imageHolder.classList.remove("dark");
        imageHolder.classList.add("light");

        upperRightNavChilds.forEach( //used foreach as there are multiple elements with this class 
            (n)=>{
                n.classList.remove("dark");
                n.classList.add("light");
            }
        );
    }
});