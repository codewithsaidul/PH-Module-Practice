{
    // Abstruction -> OOP TypeScript

    // abstruction -> 1. interface 2.abstruct class

    interface Vechile1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void
    }


    class Car1 implements Vechile1 {
        startEngine(): void {
            console.log("I'm starting the car engine")
        }
        stopEngine(): void {
            console.log("I'm stopped the car engine")
        }
        move(): void {
            console.log("I'm moving the car")
        }
    }

    const toyotaCar = new Car1()
    toyotaCar.startEngine();


    abstract class Vechile2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void
    }

    class Car2 extends Vechile2 {
        startEngine(): void {
            console.log("I'm starting the car engine")
        }
        stopEngine(): void {
            console.log("I'm stopped the car engine")
        }
        move(): void {
            console.log("I'm moving the car")
        }
    }

    const toyotaTesla = new Car2()
    toyotaCar.startEngine();
    toyotaCar.stopEngine();
    toyotaCar.move();
}