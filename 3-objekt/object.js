/* 

Object 
Innehåller ett eller flera värden
beskrivs som key: value par

JSON (Javascript object notation)


const obj - {

}



*/

const user = {
  firstName: "joakim",
  lastName: "lind",
  age: "36",
  adress: {
    street: "gata",
    nr: "12",
    postalcode: "987612",
    city: "västerås",
  },
  phonenumbers: {
    home: "0708974656",
    work: "08-98129383",
  },
};

console.log(user);

//destructure

const firstName = user.firstName;
const lastName = user.lastName;

console.log("användare heter $firstName $(lastName) och bor i $(adress)");
