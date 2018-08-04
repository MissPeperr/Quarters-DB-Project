"use strict"
console.log("building the DOM!");

// universal function for grabbing elements on the DOM
grabElement = (identifier) => {
    let element = document.querySelector(identifier);
    return element;
}

// universal function for creating elements on the DOM
makeElement = (element) => {
    let madeElement = document.createElement(element);
    return madeElement;
}

buildDOM = () => {
const body = grabElement("body");
const script = grabElement("script");
const header = makeElement("header");
const main = makeElement("main");
const footer = makeElement("footer");
body.insertBefore(footer, script);
body.insertBefore(main, footer);
body.insertBefore(header, main);
}

makeContainer = () => {
    const mainContent = grabElement("main");
    const familyContainer = makeElement("div");
}
