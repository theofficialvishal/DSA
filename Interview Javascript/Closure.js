function createCounter() {
    let count = 0 //private variable

    return {
        increment: function () {
            count++
            console.log(count)
        },
        decrement: function () {
            count--
            console.log(count)
        }
    }
}


let counter = createCounter()

counter.increment()
counter.increment()
counter.increment()

counter.decrement()

/*
createCounter() execute hua aur khatam ho gaya. Normal languages mein count variable memory se delete ho jana chahiye tha.

Lekin increment aur decrement functions ne count ka reference apne Closure mein hold karke rakha tha.

Isliye jab aapne baad mein counter.increment() chalaya, toh use count ki purani value yaad thi.

Tricky Interview Question: "Kya closures memory leak kar sakte hain?"
Answer: Haan, kyunki jab tak inner function ka reference zinda hai, tab tak outer function ke variables memory se clear (Garbage Collect) nahi hote. Agar bohot bade objects closure mein fase rahein, toh memory leak ho sakti hai.

*/