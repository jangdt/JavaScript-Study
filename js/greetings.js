const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = loginForm.querySelector("a");
const greetingText = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";           // USER_NAME is the key for username

function paintGreetings(username) {
    greetingText.classList.remove(HIDDEN_CLASSNAME);
    greetingText.innerText = `Hello~ ${username} ${5+10}`;
}
function onLoginSubmit(event)
{
    event.preventDefault(); // 브라우저의 summit 기본 행동을 막아준다. 

    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USER_NAME, username);

    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USER_NAME);
if(savedUsername === null)
{
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    // show the greetings
    paintGreetings(savedUsername);
}


/*
const loginForm = document.querySelector("#login-form");
const link = loginForm.querySelector("a");
function onLinkClick(event)
{
    event.preventDefault();
    console.log(event);
}
link.addEventListener("click", onLinkClick);
*/
/*
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginButtonClick()
{
    const username = loginInput.value;
    console.log(username);
    
    if (username === "") {
        console.log("please write your name");
    }
    else if(username.length > 15) {
        console.log("Your name is to long.");
    }
    else {
        console.log(username);
        loginInput.username = "";
    }
}

loginButton.addEventListener("click", handleLoginButtonClick);
*/

/*
const h1 = document.querySelector(".hello:first-child h1");

function handleHelloClick() {
    const className = "active";
    h1.classList.toggle(className);
};
h1.addEventListener("click", handleHelloClick);
*/
/*
const h1 = document.querySelector(".hello:first-child h1");

function handleHelloClick() {
    const className = "active";
    if(h1.classList.contains(className)) {
        h1.classList.remove(className)
    }
    else {
        h1.classList.add(className);
    }
};
h1.addEventListener("click", handleHelloClick);
*/
/*
const h1 = document.querySelector(".hello:first-child h1");
function handleHelloClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue")
        newColor = "tomato";
    else
        newColor = "blue";
    h1.style.color = newColor;
};
h1.addEventListener("click", handleHelloClick);
*/
/*
const h1 = document.querySelector(".hello:first-child h1");
function handleHelloClick() {
    h1.style.color = "blue";
};
function handleMouseEnter() {
    h1.innerText = "mouse is here!";
    console.log("mouse is here!");
};
function handleMouseleave() {
    h1.innerText = "mouse is leave!";
    console.log("mouse is leave!");
};
function handleWindowResize() {
    document.body.style.backgroundColor = "red";
};
function handleWindowCopy() {
    console.log("window copy");
};

h1.addEventListener("click", handleHelloClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
*/
/*
const h1 = document.querySelector(".hello:first-child h1");
console.dir(h1);

h1.style.color = "blue";
h1.innerText = "jangdt";
*/

/*
const h1 = document.getElementsByClassName("Hello")
const h1Name = h1[0].getElementsByTagName("h1");
console.log((h1Name));
*/

/*
const title = document.getElementById("title");
title.innerText = "hihi"

console.log(title.id);
console.log(title.className);

console.dir(title);
*/

/**
 * 문법
 * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

const input = prompt("How old are you?");
const age = parseInt(input);
if(!isNaN(age)) {
    console.log(age);
}
else {
    console.log((typeof input === "string") ? "String" : "뭐야?" );
}
 


const calculator = {
    add: function(a, b) {
        return a+b;
    },
    minus: function(a, b) {
        return a-b;
    },
    div: function(a, b) {
        return b/a;
    },
    power: function(a, b) {
        return a**b;
    }
}

console.log(calculator.add(2, 4))
console.log(calculator.minus(2, 4))
console.log(calculator.div(2, 4))
console.log(calculator.power(2, 4))


function sayHello(name) {
    console.log("Hello my name is "+name);
}
sayHello("jangdt");
sayHello("hoho");

function plus (a, b) {
    console.log(a+b);
    return a+b;
}
console.log(plus(1, 1));

const player = {
    name: "jangdt",
    points: 10,
    fat: true,
};

console.log(player);

player.lastName = "Dragon";
console.log(player);
 */