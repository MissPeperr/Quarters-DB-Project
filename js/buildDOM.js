"use strict";

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

// function that's inserting each element at a certain point on the body on our page
let buildDOM = () => {
    const body = grabElement("body");
    const script = grabElement("script");
    const header = makeElement("header");
    const main = makeElement("main");
    const footer = makeElement("footer");
    body.insertBefore(footer, script);
    body.insertBefore(main, footer);
    body.insertBefore(header, main);
    makeContainer();
}

// function that is making our containers and organizing how we want them to look on our page
let makeContainer = () => {
    const mainContent = grabElement("main");
    const familyContainer = makeElement("div");
    familyContainer.setAttribute("class", "family-container");
    const titleContainer = makeElement("div");
    titleContainer.setAttribute("class", "title-container");
    const quarterInfo = makeElement("div");
    quarterInfo.setAttribute("class", "quarter-info");
    mainContent.appendChild(quarterInfo);
    mainContent.insertBefore(familyContainer, quarterInfo);
    mainContent.insertBefore(titleContainer, familyContainer);
}

module.exports = buildDOM;
