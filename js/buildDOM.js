"use strict"

// universal function for grabbing elements on the DOM
let grabElement = (identifier) => {
    let element = document.querySelector(identifier);
    return element;
}

// universal function for creating elements on the DOM
let makeElement = (element) => {
    let madeElement = document.createElement(element);
    return madeElement;
}

// function that's inserting each element at a certain point on the DOM
let buildDOM = () => {
const body = grabElement("body");
const script = grabElement("script");
const header = makeElement("header");
const main = makeElement("main");
const footer = makeElement("footer");
body.insertBefore(footer, script);
body.insertBefore(main, footer);
body.insertBefore(header, main);
}

let makeContainer = () => {
    const mainContent = grabElement("main");
    const familyContainer = makeElement("div");
    familyContainer.setAttribute("class", "family-container");
    mainContent.appendChild(familyContainer);
}

module.exports = buildDOM;
