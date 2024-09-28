// PICK

interface User{
    id: string
    name: string
    age: number
    email: string
    password: string
}

type updated = Pick<User, "name" | "age" | "password">


// PARTIAL

type updatedOptional = Partial<updated>

function updateUser(updated: updated){

}

// READ ONLY

 interface Config{
    endpoint: string
    apiKey: string
 }

 const config: Readonly<Config> = {
    endpoint: "jbk",
    apiKey: "jiil"
 }

//  config.apiKey = ""

// RECORD

type Users = {
    [key: string]: number
}

type UsersAge = Record<string, number>

const users: UsersAge = {
    age: 64
}

// MAP

interface User1{
    name: string
    email: string
    password: string
}

const userMap = new Map<string, User1>()

userMap.set("kjfj", {name: "jk", email: "jnf", password: "klr"})

console.log(userMap.get("kjfj"));