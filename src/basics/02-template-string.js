

const name = 'Andrew';
const lastName = 'Fajardo';

const nameComplete = `
${ name } 
${ lastName }`;
console.log( nameComplete );

function getGreet(name) {
    return 'Hi ' + name;
}

console.log( `This is a text: ${ getGreet( name ) } `)
