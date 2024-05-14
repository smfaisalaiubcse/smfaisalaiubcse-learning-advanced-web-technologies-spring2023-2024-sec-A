"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main.ts
var teacher_1 = require("./teacher");
var student_1 = require("./student");
// Example usage:
var mathTeacher = new teacher_1.Teacher("John", "Doe", 35, "Mathematics");
mathTeacher.assignCourse("Algebra");
mathTeacher.assignCourse("Geometry");
var student1 = new student_1.Student("Emma", "Johnson", 18);
var student2 = new student_1.Student("Michael", "Williams", 19);
mathTeacher.enrollStudent(student1, "Algebra");
mathTeacher.enrollStudent(student2, "Geometry");
console.log("\nStudent Information:");
student1.displayInfo();
console.log("Total Enrolled Courses:", student1.getTotalEnrolledCourses());
mathTeacher.viewEnrolledStudents("Algebra");
