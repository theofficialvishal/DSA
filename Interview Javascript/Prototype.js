/*
Prototypes & Prototypal Inheritance (The Chain of Sharing)
JavaScript ek prototype-based language hai (unlike Java or C++ jo class-based hain, halanki JS mein class keyword hai, par woh piche se prototype hi use karta hai).

Simple Definition: JavaScript mein har ek object ke paas ek hidden property hoti hai jise hum [[Prototype]] (ya code mein __proto__) kehte hain. Yeh property kisi dusre object ko point karti hai, jahan se yeh properties aur methods borrow (inherit) kar sakta hai.

The Prototype Chain Mechanism
Jab aap kisi object par koi property ya method dhoodte hain (jaise obj.myMethod()), toh JavaScript yeh steps follow karta hai:

Sabse pehle woh khud us object ke andar check karta hai.

Agar wahan nahi mila, toh woh uske Prototype (__proto__) ke andar check karta hai.

Agar wahan bhi nahi mila, toh woh uske prototype ke prototype mein check karta hai... jab tak use null nahi mil jata. Is safar ko Prototype Chain kehte hain.
*/

const animal = {
    eats: true,
    walk: function () {
        console.log('Animal walks')
    }
}

const rabbit = {
    jumps:true
}

rabbit.__proto__ = animal

console.log(rabbit.jumps)

console.log(rabbit.eats)
rabbit.walk()


/*
prototype vs __proto__ (Interviewer ka favourite point)
Log isme sabse zyada confuse hote hain, par farq bohot simple hai:

__proto__ (Dunder Proto): Yeh har ek Object ke paas hota hai. Yeh direct us object ke parent prototype ko point karta hai (jahan se woh properties utha raha hai). It is used for linking.

prototype: Yeh sirf Constructor Functions (ya Classes) ke paas hota hai. Iska kaam hota hai ki jab is function se new keyword ka use karke koi naya object banaya jaye, toh us naye object ka __proto__ is property par set ho jaye.
*/

function person(name) {
    this.name = name
}

person.prototype.sayHello = function () {
    console.log("Hello I am "+ this.name)
}

const user = new person('Amit')
user.sayHello()