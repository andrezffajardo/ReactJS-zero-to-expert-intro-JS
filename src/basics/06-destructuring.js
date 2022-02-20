

const person = {
    name: 'Tony',
    age: 52,
    password: 'Ironman',
};

//const { name, age, password, } = person;

//console.log( name, age, password );

const UCont = ( { name, age, password, range = 'Captain' } ) => {
    //console.log( name, age, password, range );
    return {
        namePass: password,
        age2: age,
        latlng: {
            lat: 15.698,
            lng: -45.542,
        }
    }
}

const { namePass, age2, latlng: { lat, lng } }= UCont( person );
console.log( namePass, age2 );
console.log( lat, lng );


