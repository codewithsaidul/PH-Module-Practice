"use strict";
{
    // run command ts-node ./module1/src/spreadRest.ts
    // Learn Spread & Rest Operator
    const friend1 = ["mitu", "sadia"];
    const friend2 = ["noman", "jobayer"];
    // spreading friend1 & friend2 array
    const friends = [...friend1, ...friend2];
    // console.log(friend)
    const mentors1 = {
        typescript: "Mezba Bhai",
        Redux: "Mir Bhai",
        Next: "Mizan Bhai",
    };
    const mentors2 = {
        prisma: "Tonmoy Bhai",
        Mongoose: "Rizvi Bhai",
        GraphQL: "Rakib Bhai",
    };
    // spreading two objects into one common objects
    const mentors = Object.assign(Object.assign({}, mentors1), mentors2);
    // console.log(mentors)
    // =================== rest operator
    function restOp(...friends) {
        return friends.map((friend) => `Hi ${friend}`);
    }
    //   console.log(restOp("numan", "kulsuma", "sangita", "jubayer"));
}
