// PICK

interface User{
    id: string
    name: string
    age: number
    email: string
    password: string
}

type updated = Pick<User, "name" | "age" | "password">

function updateUser(updated: updated){
    
}

