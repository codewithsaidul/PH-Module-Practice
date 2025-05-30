{

// ts-node ./module1/src/unionIntersection.ts

// ============== Union Types

// type FrontEndDeveloper = "fakibuz developer" | "junior web developer"
// type FullStackDeveloper = "junior web developer" | "fullstack developer";
// type Developer = FrontEndDeveloper | FullStackDeveloper


// const dev1: FrontEndDeveloper = "fakibuz developer";
// const dev2: FullStackDeveloper = "junior web developer";
// const developer: Developer = "fullstack developer"

// type User = {
//     name: string;
//     email?: string;
//     gender: "male" | "female";
//     blood: "O+" | "A+" | "B+" | "AB+"
// }


// const user1: User = {
//     name: "Saidul",
//     gender: "male",
//     blood: "AB+"
// }


// ================= InterSection Type

type FrontEndDeveloper = {
    name: string;
    skills: string[];
    role1: "FrontEnd Developer"
}

type BackEndDeveloper = {
    name: string;
    skills: string[];
    role2: "BackEnd Developer"
}

type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

const fullstackDeveloper: FullStackDeveloper = {
    name: "Saidul Islam Rana",
    skills: ["js", "reactjs", "nextjs", "tailwind", "prisma", "express"],
    role1: "FrontEnd Developer",
    role2: "BackEnd Developer"
}

}