{
    // Generic with Function


    // normal function
    const myName = (param: string): string[] => {
        return [param]
    }


    // function with generic
    const createArrayWithGeneric = <T> (param: T): T[] => {
        return [param]
    }


    type User = {
        id: number;
        name: string
    }

    const user1 = createArrayWithGeneric<string>("Hi")
    const user2 = createArrayWithGeneric<User>({id: 4, name: "kifd"})


    // return tuple with generic and function
    const createTupleWithGeneric = <T, A> (param1: T, param2: A): [T, A] => {
        return [param1, param2]
    }


    const user3 = createTupleWithGeneric<string, number>("Hi", 3)
    const user4 = createTupleWithGeneric<number, User>(1, {id: 4, name: "kifd"})


    // genrric with fixed value

    const addStudent = <T> (student: T) => {
        const course = "Next Level Web Developent"

        return {
            ...student,
            course
        }
    }
}