// my name
const myName = document.querySelector(".my-name");
const myNameSpread = [...myName.textContent];

// myNameSpread.map((s) => `<span>${s}</span>`);
const mySpan = myNameSpread.map((s) => `<span>${s}</span>`).join("");

myName.innerHTML = mySpan;
