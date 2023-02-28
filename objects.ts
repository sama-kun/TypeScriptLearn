// Simple object
let user :{name:string, age:number} = {
    name: 'Sama',
    age: 19
}


// Create object using type
type Person = {
    name: string,
    age: number,
    nickname?: string,
    getPass?: ()=> string // We can describe functions 
                          // ? its mean not require
}

let admin: Person = {
    name: 'Admin',
    age: 21,
    getPass(): string {
        return 'Heloo'
    },
}

let manager: Person = {
    name: 'Manager',
    age: 21,
    nickname: 'Mana'
}