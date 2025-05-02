{
  // run command ts-node ./module1/src/spreadRest.ts
  // Learn Spread & Rest Operator

  const friend1: string[] = ["mitu", "sadia"];
  const friend2: string[] = ["noman", "jobayer"];

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
  const mentors = {
    ...mentors1,
    ...mentors2,
  };

  // console.log(mentors)

  // =================== rest operator

  function restOp(...friends: string[]) {
    return friends.map((friend: string) => `Hi ${friend}`);
  }

//   console.log(restOp("numan", "kulsuma", "sangita", "jubayer"));
}
