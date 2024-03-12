"use strict";
// Type Assertion
//const btn = document.getElementById("btn") as HTMLElement;
//OR
//const btn = document.getElementById("btn")!;
//OR
// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick;
// const img = document.getElementById("img") as HTMLImageElement;
// img.src;
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
btn.onclick = form.submit;
form.onsubmit = (e) => {
    e.preventDefault();
    const h2 = document.createElement("h2");
    const value = Number(input.value);
    const body = document.querySelector("body");
    h2.textContent = String(value * 20);
    body.append(h2);
};
