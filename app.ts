/**
 * Created by dasco on 3/9/2017.
 */
interface NamedPerson {
    firstName: string;
}

function greet(person: NamedPerson) {
    console.log("Hello, " +person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person = {
    firstName: "drake",
    age: 20
};

greet(person);
changeName(person);
greet(person);