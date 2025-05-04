{
    // learn interface 

    type User1 = {
        name: string;
        role: number;
        isAdult: boolean
    }

    type User2 = {
        age: number
    }

    // interface for object
    interface User3 {
        name: string;
        role: number;
        isAdult: boolean
    }


    // interface & type extends
    type User5 = User1 & { address: string}
    type User6 = User1 & User3
    interface User3 extends User2 {
        number: number
    }


    // Interface for function
    interface Add {
        (num1: number, num2: number): number
    }

    // interface for array
    interface Friend {
        [index: number]: string
    }

    const friend: Friend = ["mitu", "sadia"]

}