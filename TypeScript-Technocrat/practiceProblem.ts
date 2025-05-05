{
    // TODO: Task 1: Basic Data Types and First Program
    const nextLevel: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!"
    console.log(nextLevel)


    // TODO: Task 2: Functions, Optional, and Literal Types
    const funcUser = (value: {name: string; age: number; role: "Admin"|"User"|"Guest"}) => {
        const data = value;
        return data
    }

    // TODO: Task 3: Object Types, Type Alias, & Literal Types
    type SingleUser = {
        name: string;
        address: string;
        HairColor: string;
        EyeColor: string;
        Income: number;
        Expense: number;
        Hobbies: string[];
        FamilyMembers: number;
        Job: string;
        Skills: string[];
        MaritalStatus: string;
        Friends: string[]
    }

    const user: SingleUser = {
        name: "Hasan",
        address: "Uganda",
        HairColor: "Brown",
        EyeColor: "Blue",
        Income: 50000,
        Expense: 47800,
        Hobbies: ["Reading Books", "Gardening"],
        FamilyMembers: 5,
        Job: "Junior Web Developer at XYZ Compnay",
        Skills: ["React", "Next", "Typescript"],
        MaritalStatus: "Unmarid",
        Friends: ["Josna", "alex"]
    }


    // TODO: Task 4: Union and Intersection Types
    type Book = {
        name: string;
        price: number;
        author: string;
        releaseYear: number;
    }

    type Magazine = {
        name: string;
        title: string;
        author: string;
        releaseYear: number
    }

    // Union Types
    type BookMagazineUnion = Book | Magazine;

    // Intersection Types
    type BookMagazineIntersection = Book & Magazine
}