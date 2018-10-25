// Object Literal
var person = {
    /* property: value*/
    name: "Néstor",
    lastname: "Aldana",
    birthday: Date.now()
}; // JSON (JavaScript Object Notation)

// Access to propertys
console.log(person.name);
// Change object's property value
person.birthday = new Date(1994, 0, 11); // 11 - Jan - 1994
console.log(person.birthday);

console.log(person.dui) // undefined
person.dui = "000000000" // Assign 
console.log(person.dui) // 000000000

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

let list = [] // To save persons

// To Add 10 fake persons
for (let i = 0; i < 10; i++) {
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`, new Date().setFullYear(1990 + i + Math.floor(Math.random() * 5)), `000000${i}`));
}

console.table(list);

// Array Higher function
// Show only the name persons
console.table(list.map(({
    name
}) => name));
// More readable
//var hoy= new Date();
//console.log(hoy.getMonth());

function getAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    //console.log(Date.now().getDay());
    var today = new Date();
    var mesPrueba = today.getMonth() - ageDate.getMonth();
    var edadTentativa = ageDate.getUTCFullYear() - 1970;
    /*Se obtiene la edad exacta, considerando si no ha llegado el mes de cumpleaños o
    si ya ha llegado el mes pero no el dia, entonces se restara 1 año a la edadTentiva obteniendo 
    la edad real*/
    if (mesPrueba<0 || (mesPrueba===0 &&(today.getDate()-ageDate.getDate())<0)) {
        edadTentativa = edadTentativa - 1;
    }
    return Math.abs(edadTentativa);
}

console.log("Average age %i", list.reduce((sum, {
    birthday
}) => getAge(birthday) + sum, 0) / list.length);