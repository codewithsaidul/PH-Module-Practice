{
    const name: string = "saidul"; // string type is typescript
    const phone: number = 190000; // number type in typescript
    const isMaride: boolean = false; // boolean type in typescript

    const friends: string[] = ["mitu", "sadia", "noman", "jubayer"] // array type in typescript

    // tuple -> array -> order
    const myTuple: [string, number] = ["cws", 2022] // tuple type in typescript

    const car: {
        company: "Tesla";
        model: string;
        color: string;   //object type in typescript
        year: number;
        isElectronic: boolean
    } = {
        company: "Tesla",
        model: "Tesla Teer",
        color: "Shad green",
        year: 1995,
        isElectronic: false
    }


    function normalAdd (num1: number, num2: number): number {
        return num1 + num2 // normal function in typescript
    }

    const arrowAdd = (num1: number, num2: number): number =>  num1 - num2 // arrow function in typescript

    const toyata = {
        company: "Toyato",
        model: "Toyato Teer",
        color: "Shad green",
        year: 1995,
        isElectronic: false,
        actions (command: string) {
            if (command === "drive") {
             return `${this.model} is running on the highway`
            } else {
             return `${this.model} is stopped on Oil pump`
            }
        }
    }

    // console.log(name, phone, isMaride, friends, myTuple, car, normalAdd(71, 29), arrowAdd(71, 21), toyata.actions("drive"))

    
}