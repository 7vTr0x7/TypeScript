// Type Assertion

//const btn = document.getElementById("btn") as HTMLElement;
//OR
//const btn = document.getElementById("btn")!;
//OR

// const btn = <HTMLElement>document.getElementById("btn");

// btn.onclick;

// const img = document.getElementById("img") as HTMLImageElement;

// img.src;

const form = document.getElementById("form") as HTMLFormElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("input") as HTMLInputElement;

btn.onclick = form.submit;

form.onsubmit = (e) => {
  e.preventDefault();
  const h2 = document.createElement("h2");
  const value: number = Number(input.value);
  const body = document.querySelector("body") as HTMLBodyElement;

  h2.textContent = String(value * 20);

  body.append(h2);
};
