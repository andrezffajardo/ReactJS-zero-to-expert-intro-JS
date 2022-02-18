

const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 46,
    address: {
        city: 'NY',
        zip: 45789,
        lat: 15.6894,
        lng: 58.694,
    }
};

const person2 = { ...person };
person2.name = 'Peter';

console.log( person );

console.log( person2 );





