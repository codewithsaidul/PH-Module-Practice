"use strict";
{
    // run command ts-node ./TypeScript-Technocart/module1/src/destructuring.ts
    // Learn Destructuring
    const user = {
        id: "WEBB9-354",
        name: {
            firstName: "Saidul",
            middleName: "Islam",
            lastName: "Rana",
        },
        phone: "0190000000",
        address: "uganda",
    };
    const { address, name: { lastName: defaultName }, } = user;
    // console.log(address, defaultName)
    const friends = ["mitu", "numan", "sadia", "sangita", "abdullah", "jubayer"];
    const [, , bestFriends, ...spread] = friends;
    // 
    //   console.log(spread)
}
