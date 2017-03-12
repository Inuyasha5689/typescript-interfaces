/**
 * Created by dasco on 3/9/2017.
 */
interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
}

function greet(person: NamedPerson) {
    console.log("Hello, " +person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person = {
    firstName: "drake",
    hobbies: ["cooking", "programming"]
};

greet({firstName: "max", age: 20});
changeName(person);
greet(person);