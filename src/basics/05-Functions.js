

const greet = function( name ){
    return `Hi, ${ name }`;
}

const greet2 = ( name ) => {
    return `Hi, ${ name }`;
}

const greet3 = ( name ) => `Hi, ${ name }`;
const greet4 = () => `Hi World`;

console.log( greet('Andrew') )
console.log( greet2('Felipe') )
console.log( greet3('George') )
console.log( greet4('George') )

const getUser = () => ({
    uid: 'ADER4511',
    username: 'jhskloj'
});

const user = getUser();
console.log(user);

const getUserActive = ( name ) => ({
    uid: 'HGF452',
    username: name,
});

const activeUser = getUserActive('Pepe');
console.log( activeUser );


