// singleton

// Object.create  constractor method

// object literals

const mySymbol = Symbol("key1")


// const JsUser = {
//     Name : "Tisa",
//     [mySymbol] : "mykey1",
//     GRID : "8680",
//     Email : "tisa@gmail.com", 
//     age : "21",
//     location : "Navsari,Gujrat",
//     lastLoginDays:["Monday","to","Friday"]
// }

console.log(JsUser["Email"]);
console.log( JsUser[mySymbol]);

JsUser.Email = "tisa12@gmail.com"
// Object.freeze(JsUser)
JsUser.Email = "admin1204@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello React User")

}

console.log(JsUser.greeting());
