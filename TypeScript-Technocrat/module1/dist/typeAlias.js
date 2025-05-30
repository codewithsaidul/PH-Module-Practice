"use strict";
// run command ts-node ./module1/src/typeAlias.ts
{
    const student1 = {
        name: "saidul",
        role: "WEBB9-354",
        age: 10,
        gender: "Nothing",
        phone: "019838438",
        address: "Uganda"
    };
    const student2 = {
        name: "rana",
        role: "WEBB9-254",
        age: 13,
        gender: "or",
        phone: "1289we48",
    };
    const student3 = {
        name: "islam",
        role: "WEBB9-154",
        age: 15,
        gender: "or",
        phone: "1289we48",
    };
    const userName = "Saidul";
    const userName1 = "Rana";
    const number1 = 832783284;
    const number2 = 343209;
    const isAdmin = true;
    const isDashboard = false;
    const add = (num1, num2 = 0) => num1 + num2;
    console.log(add(7, 3));
}
