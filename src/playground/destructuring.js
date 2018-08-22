// const person = {
//     name: 'Matthew',
//     age: 15,
//     location: {
//         city: 'Cape Town',
//         temp: 13
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
// console.log(`It's ${temperature} degrees in ${city}`)}

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin' 
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['21 Clifton Road', 'Cape Town', 'Western Cape', '7700']
// const [, city, province = 'Western Province'] = address;
// console.log(`You are in ${city}, ${province}. `)

const item = ['Coffee (iced)', 'R22', 'R26', 'R28'];
const [itemName, , large] = item;
console.log(`A large ${itemName} costs ${large}.`);