// run command ts-node ./module1/src/typeAlias.ts


{





    //  learn type alias

    type Student = {
        name: string;
        role: string;
        age: number;
        gender: string;
        phone?: string;
        address?: string
    }



    const student1: Student = {
        name: "saidul",
        role: "WEBB9-354",
        age: 10,
        gender: "Nothing",
        phone: "019838438",
        address: "Uganda"
    }


    const student2: Student = {
        name: "rana",
        role: "WEBB9-254",
        age: 13,
        gender: "or",
        phone: "1289we48",
    }


    const student3: Student = {
        name: "islam",
        role: "WEBB9-154",
        age: 15,
        gender: "or",
        phone: "1289we48",
    }


    type UserName = string;
    type YourNumber = number;
    type IsAdmin = boolean;

    const userName:  UserName = "Saidul"
    const userName1:  UserName = "Rana"
    const number1: YourNumber = 832783284;
    const number2: YourNumber = 343209;
    const isAdmin: IsAdmin = true;
    const isDashboard: IsAdmin = false;

    type Add = (num1: number, num2: number) => number


    const add: Add = (num1, num2 = 0) => num1 + num2

    console.log(add(7, 3))

}