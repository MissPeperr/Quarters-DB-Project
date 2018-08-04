"use strict";

let buildDOM = require("./buildDOM");
let buildHeader = require("./build-header");
let buildQuarterCards = require("./build-cards");

console.log("build the dom!");
buildDOM();
buildHeader();
buildQuarterCards();