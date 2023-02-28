// Type never 
// Use never if function return Error type
const msg: string = 'Error';

const foo = (msg: string):never =>{
    throw new Error(msg);
} 

// Type void
// Use void if function return return nothing 
const voidFunc = (name: string = 'Sama'): void =>{
    console.log(`Hello ${name}`);
}

// Simple function
const generetePass = (name: string = 'Sama', age: number | string = 20) => `${name}${age}`;

// Type of function              |
const myPow = (num: number, power?: number): number =>{
    if(!power)
        power = 2;
    return Math.pow(num,power);
}

console.log(myPow(2,3))

// REST type
const skills = (name: string, ...skills: Array<string>): string=> `${name}, my skills are ${skills.join()}`;





