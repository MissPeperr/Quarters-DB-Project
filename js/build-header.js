"use strict";

let buildDOM = require("./buildDOM");

let buildHeader = () =>{
    const header = document.querySelector("header");
    header.innerHTML = "<h1>Welcome to the Quarter Database!</h1>";
}

module.exports = buildHeader;