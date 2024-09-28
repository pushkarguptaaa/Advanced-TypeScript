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