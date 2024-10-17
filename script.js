//complete this code
// Base class Person
class Person {
    // Constructor to initialize name and age
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for the name attribute
    get name() {
        return this._name;
    }

    // Setter for the age attribute
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a positive value.");
        }
    }

    // Getter for the age attribute
    get age() {
        return this._age;
    }
}

// Subclass Student that extends Person
class Student extends Person {
    // Method to simulate studying
    study() {
        console.log(`${this.name} is studying.`);
    }
}

// Subclass Teacher that extends Person
class Teacher extends Person {
    // Method to simulate teaching
    teach() {
        console.log(`${this.name} is teaching.`);
    }
}

// Example usage:
// Creating instances of Student and Teacher
const student = new Student("Alice", 20);
const teacher = new Teacher("Mr. Smith", 45);

// Calling their respective methods
student.study();  // Output: Alice is studying.
teacher.teach();  // Output: Mr. Smith is teaching.

// Changing the student's age using the setter
student.age = 21;
console.log(`New age of ${student.name} is ${student.age}`);  // Output: New age of Alice is 21


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
