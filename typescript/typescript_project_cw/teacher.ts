import { Student } from './student';
export class Teacher {
    private firstName: string;
    private lastName: string;
    private age: number;
    private department: string;
    private courses: string[] = [];
    private studentsEnrolled: string[][] = [];

    constructor(firstName: string, lastName: string, age: number, department: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department = department;
    }

    // Method to display teacher's information
    displayInfo(): void {
        console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, Department: ${this.department}`);
    }

    // Method to assign courses to the teacher
    assignCourse(course: string): void {
        this.courses.push(course);
    }

    // Method to view students enrolled in the teacher's courses
    viewEnrolledStudents(course: string): string[] {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            return this.studentsEnrolled[index] || [];
        } else {
            return [];
        }
    }

    // Method to enroll a student in a course
    enrollStudent(student: Student, course: string): void {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.studentsEnrolled[index] = this.studentsEnrolled[index] || [];
            this.studentsEnrolled[index].push(`${student.getFirstName()} ${student.getLastName()}`);
            console.log(`${student.getFirstName()} ${student.getLastName()} enrolled in ${course}.`);
        } else {
            console.log(`Course ${course} not assigned to this teacher.`);
        }
    }
}