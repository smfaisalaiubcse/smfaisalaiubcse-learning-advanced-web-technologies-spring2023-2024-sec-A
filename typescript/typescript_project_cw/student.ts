export class Student {
    private firstName: string;
    private lastName: string;
    private age: number;
    private coursesEnrolled: string[] = [];

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    displayInfo(): void {
        console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`);
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getAge(): number {
        return this.age;
    }

    enrollCourse(course: string): void {
        this.coursesEnrolled.push(course);
    }

    getTotalEnrolledCourses(): number {
        return this.coursesEnrolled.length;
    }
}
