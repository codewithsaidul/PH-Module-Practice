{
    // Learn Constraints using keyof operator in typescript

    // interface for user value
    interface User {
        name: string;
        age: number
    }


    const users = <X, Y extends keyof X> (obj: X, key: Y) => {
        return obj[key]
    }

    const userData = {
        name: "saidul",
        age: 22
    }

    const user1 = users(userData, "name")
}