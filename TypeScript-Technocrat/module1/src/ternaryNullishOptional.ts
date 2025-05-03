{


// ts-node ./module1/src/ternaryNullishOptional.ts

// ternary operator in typescript
const age: number = 15;
const isAdult = age >= 18 ? "Adult" : "Child"



// Nullish Coalescing

const isAuthenticated1 = null
const isAuthenticated2 = ""

const user1 = isAuthenticated1 ?? "Guest User"
const user2 = isAuthenticated2 ? isAuthenticated1 : "Guest User"


// optional chainging in typescript

type User = {
    name: string;
    age: number;
    address: {
        city: string;
        road: string;
        present: string;
        permenent?: string
    }
}


const user: User = {
    name: "saidul",
    age: 23,
    address: {
        city: "syl",
        road: "1 2 road",
        present: "nothing"
    }
}

console.log(user?.address?.permenent ?? "No Permenent Address Found")



}