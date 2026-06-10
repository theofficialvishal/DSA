let a = 10
let b = 20

a = a ^ b
b = a ^ b
a = a ^ b



/*
Line 1: a = a ^ b;
a ke andar ab 10 ^ 20 ki value save ho gayi hai. (Isko abhi solve mat karo, bas aise hi likha rehne do: a = 10 ^ 20).

Line 2: b = a ^ b;
Abhi upar humne dekha ki a ki nayi value 10 ^ 20 hai. Chaliye isko is formula mein put karte hain:
b = (10 ^ 20) ^ b

b ki apni purani value kya thhi? 20. Toh equation bani:
b = 10 ^ 20 ^ 20

Kyunki 20 ^ 20 = 0 hota hai, toh bacha kya? 10 ^ 0 = 10.

Boom! b ki value ab 10 ho chuki hai! (b swap ho gaya)

Line 3: a = a ^ b;
a ki value abhi bhi wahi puraani chal rahi hai: 10 ^ 20. Aur b ki nayi value abhi-abhi kya bani hai? 10.

Chaliye dono ko is formula mein daalte hain:
a = (10 ^ 20) ^ 10

Kyunki sequence matter nahi karta, isko hum aise likh sakte hain:
a = 10 ^ 10 ^ 20

Kyunki 10 ^ 10 = 0 hota hai, toh bacha kya? 0 ^ 20 = 20.

Boom! a ki value ab 20 ho chuki hai! (a bhi swap ho gaya)
*/