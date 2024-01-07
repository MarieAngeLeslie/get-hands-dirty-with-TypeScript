type User = { firstname: string, lastname: string }
type IdentityType<ArgType> = (arg: ArgType) => ArgType

const user: User = { firstname: "ashraf", lastname: "akimi" }

function identity<ArgType>(arg: ArgType): ArgType {
    return arg;
}



//Type extends { length: number } : doit étendre d'un objet qui contiendrais une clé length qui serait de type number
function consoleSize<Type extends { length: number }>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}

const logSize = consoleSize("t");

const identityVariable = identity(3);

const compteur = document.querySelector('#compteur');
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
}



compteur?.addEventListener('click', increment)
