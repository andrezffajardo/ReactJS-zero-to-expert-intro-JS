
const characters = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = characters;
console.log( p3 );

const returnArray = () =>{
    return ['ABC', 123];
}

const [ letters, numbers ] = returnArray();
console.log(letters, numbers);

const uState = ( value ) => {
    return [ value, () =>{ console.log('Hi World')}];
}

const [ name, setName ] = uState( 'Gokuu' );
console.log( name );
setName();
