"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
// Student.ts
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.coursesEnrolled = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Method to display student's information
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.firstName, " ").concat(this.lastName, ", Age: ").concat(this.age));
    };
    // Getter methods
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    // Method to enroll in a course
    Student.prototype.enrollCourse = function (course) {
        this.coursesEnrolled.push(course);
    };
    // Method to get total enrolled courses
    Student.prototype.getTotalEnrolledCourses = function () {
        return this.coursesEnrolled.length;
    };
    return Student;
}());
exports.Student = Student;
