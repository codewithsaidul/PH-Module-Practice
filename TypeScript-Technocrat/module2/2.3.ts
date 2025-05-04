{
    // Generic Type in TypeScript

    //   generic
    type GenericType<T> = Array<T>

    // const roleNumber: number[] = [3, 9, 3, 3]; 
    const roleNumber: GenericType<number> = [3, 9, 3, 3]; // Number Array with Generic

    // const name: string[] = ["x", "y"];
    const name: GenericType<string> = ["x", "y"]; // String Array with Generic

    // const bool: boolean[] = [true, false];
    const bool: boolean[] = [true, false]; // Boolean Arry with Generic


    type User = {
        id: number;
        name: string;
        type: string
    }

    const users: GenericType<User> = [
        {
            id: 1,
            name: "x",
            type: "Guest"
        },
        {
            id: 2,
            name: "y",
            type: "Guest"
        }
    ]


    // generic tuple
    type GenericTuple<x, y> = [x, y];
    const myTuple: GenericTuple<string, number> = ["Josim", 1234]
}