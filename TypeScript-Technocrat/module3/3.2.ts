{
    // OOP -> Inheritance

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor (name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep (sleepOfHours: number) {
            console.log(`${this.name} was sleap for ${sleepOfHours} hours`)
        }
    }


    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }

    class Teacher extends Parent {
        designation: string;
        constructor (name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation
        }
        takeClass (numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} classes`)
        }
    }


    const std = new Student("Hasib", 19, "Uganda")
    const teacher = new Teacher("Korim", 57, "Vatican City", "Principle")

    std.getSleep(8);
    teacher.getSleep(6);
    teacher.takeClass(8);
}