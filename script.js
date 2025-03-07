// const nome = "JavaScript";
// console.log(nome);

// let total = 10;
// console.log(total);

// const nav = document.querySelector("nav");
// const produtos = document.querySelector(".produtos");
// const link = document.querySelector("#menu li a");

// console.log(nav);
// console.log(produtos);
// console.log(link);

const cursoJs = document.querySelector("#curso");

console.log(cursoJs.innerHTML);
console.log(cursoJs.innerText);
console.log(cursoJs.clientHeight);
console.log(cursoJs.clientWidth);

cursoJs.style.backgroundColor = "black";
cursoJs.style.padding = "1rem";
cursoJs.style.height = document.body.clientHeight / 2 + "px";

cursoJs.classList.add("Ativo");
cursoJs.setAttribute("aria-label", "Cursos");
