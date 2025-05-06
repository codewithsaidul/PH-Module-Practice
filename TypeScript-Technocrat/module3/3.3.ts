{
    // Type & In Guards -> Functional Programming TypeScript

    // Type Gurd
    type AlphaNumeric = string | number
    const add = (param1: AlphaNumeric, param2: AlphaNumeric) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }
    console.log(add(2, "4"))


    // In Gurd  
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: string
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        } else {
            console.log(`My name is ${user.name}`)
        }
    }

    const normalUser: NormalUser = { name: "Normal User"}
    const adminUser: AdminUser = { name: "Admin User", role: "admin"}

    getUser(normalUser)
    getUser(adminUser)

}