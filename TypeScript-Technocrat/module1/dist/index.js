"use strict";
{
    const name = "saidul"; // string type is typescript
    const phone = 190000; // number type in typescript
    const isMaride = false; // boolean type in typescript
    const friends = ["mitu", "sadia", "noman", "jubayer"]; // array type in typescript
    // tuple -> array -> order
    const myTuple = ["cws", 2022]; // tuple type in typescript
    const car = {
        company: "Tesla",
        model: "Tesla Teer",
        color: "Shad green",
        year: 1995,
        isElectronic: false
    };
    function normalAdd(num1, num2) {
        return num1 + num2; // normal function in typescript
    }
    const arrowAdd = (num1, num2) => num1 - num2; // arrow function in typescript
    const toyata = {
        company: "Toyato",
        model: "Toyato Teer",
        color: "Shad green",
        year: 1995,
        isElectronic: false,
        actions(command) {
            if (command === "drive") {
                return `${this.model} is running on the highway`;
            }
            else {
                return `${this.model} is stopped on Oil pump`;
            }
        }
    };
    console.log(name, phone, isMaride, friends, myTuple, car, normalAdd(71, 29), arrowAdd(71, 21), toyata.actions("drive"));
}
