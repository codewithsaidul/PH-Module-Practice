{
    // Statics -> OOP TypeScript

    class Counter {
        static counter: number = 0;

        set increment (val: number) {
          Counter.counter += val
        }

        get value () {
            return Counter.counter
        }
    }

    const counter1 = new Counter();
    counter1.increment = 1
    console.log(counter1.value)
    const counter2 = new Counter();
    counter2.increment = 1
    console.log(counter2.value)
    const counter3 = new Counter();
    counter2.increment = 1
    console.log(counter2.value)
    const counter4 = new Counter();
    counter2.increment = 1
    console.log(counter2.value)
    const counter5 = new Counter();
    counter2.increment = 1
    console.log(counter2.value)
}