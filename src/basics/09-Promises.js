import { getHeroeById } from "./basics/08-imp-exp";


// const promise = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         //reject( 'Heroe not found' );
//     }, 2000 )
// });
//
// promise.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if ( heroe ) {
                resolve( heroe );
            } else {
                reject( 'Heroe not found' );
            }
        }, 2000 )
    });
}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn )
