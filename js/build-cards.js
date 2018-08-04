"use strict";

let stateQuarters = require("./database");

let buildQuarterCards = () => {
    const quarterDIV = document.querySelector(".quarter-info");
    stateQuarters.forEach((item) => {
        quarterDIV.innerHTML +=
            `<div class="quarter-card">
                <div>
                    <img src="${item.image}" alt="${item.name} State Quarter">
                </div>
                <div class="div-text">
                    <h3>${item.name}</h3>
                    <h4>Year released: ${item.year}</h4>
                </div>
            </div>`
    });

};


module.exports = buildQuarterCards;