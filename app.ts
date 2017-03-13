/**
 * Created by dasco on 3/9/2017.
 */
interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, " +person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "drake",
    hobbies: ["cooking", "programming"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName+ " " + lastName);
    }
};

// greet({firstName: "max", age: 20});
changeName(person);
greet(person);
person.greet("Anything");