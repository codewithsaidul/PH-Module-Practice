{
    // Learning Utility Types in TypeScript


    type AllUser = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    // Pick: picking type from AllUser 
    type Picking = Pick<AllUser, "name"|"age">

    // Omit: Remove type from AllUser
    type Omiting = Omit<AllUser, "age">

    // Required: making required all types from AllUser
    type Requiring = Required<AllUser>

    // Partial: Make all types Optional from AllUser
    type Partialing = Partial<AllUser>

    // ReadOnly: Cann't change any value only read
    type OnlyRead = Readonly<AllUser>


    // Record: Add type when new property added, ( its need two parameter one for key and another for value)
    type Recording = Record<string, string>

    
}