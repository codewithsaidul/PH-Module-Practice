{
    // Learn Constraints in typescript

    // interface for std valu
    interface Student {
        id: number;
        name: string;
        email: string
    }

    
    const addStudent = <T extends Student> (student: T) => {
        const course = "Next Level Web Developent"

        return {
            ...student,
            course
        }
    }


    const std1 = addStudent({
        id: 1,
        name: "saidul",
        email: "example@gmail.com",
        hasWatch: true
    })
    const std2 = addStudent({
        id: 12,
        name: "saidul",
        email: "example@gmail.com",
        hasWatch: false
    })
}