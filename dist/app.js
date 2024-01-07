"use strict";
const user = { firstname: "ashraf", lastname: "akimi" };
function identity(arg) {
    return arg;
}
//Type extends { length: number } : doit étendre d'un objet qui contiendrais une clé length qui serait de type number
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const logSize = consoleSize("t");
const identityVariable = identity(3);
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
