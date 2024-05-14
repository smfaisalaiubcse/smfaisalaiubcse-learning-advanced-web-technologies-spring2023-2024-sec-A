"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, age, department) {
        this.courses = [];
        this.studentsEnrolled = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department = department;
    }
    // Method to display teacher's information
    Teacher.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.firstName, " ").concat(this.lastName, ", Age: ").concat(this.age, ", Department: ").concat(this.department));
    };
    // Method to assign courses to the teacher
    Teacher.prototype.assignCourse = function (course) {
        this.courses.push(course);
    };
    // Method to view students enrolled in the teacher's courses
    Teacher.prototype.viewEnrolledStudents = function (course) {
        var index = this.courses.indexOf(course);
        if (index !== -1) {
            return this.studentsEnrolled[index] || [];
        }
        else {
            return [];
        }
    };
    // Method to enroll a student in a course
    Teacher.prototype.enrollStudent = function (student, course) {
        var index = this.courses.indexOf(course);
        if (index !== -1) {
            this.studentsEnrolled[index] = this.studentsEnrolled[index] || [];
            this.studentsEnrolled[index].push("".concat(student.getFirstName(), " ").concat(student.getLastName()));
            console.log("".concat(student.getFirstName(), " ").concat(student.getLastName(), " enrolled in ").concat(course, "."));
        }
        else {
            console.log("Course ".concat(course, " not assigned to this teacher."));
        }
    };
    return Teacher;
}());
exports.Teacher = Teacher;
