
import { Teacher } from './teacher';
import { Student } from './student';

const mathTeacher = new Teacher("John", "Doe", 35, "Mathematics");

mathTeacher.assignCourse("Algebra");
mathTeacher.assignCourse("Geometry");

const student1 = new Student("Emma", "Johnson", 18);
const student2 = new Student("Michael", "Williams", 19);

mathTeacher.enrollStudent(student1, "Algebra");
mathTeacher.enrollStudent(student2, "Geometry");

console.log("\nStudent Information:");
student1.displayInfo();
console.log("Total Enrolled Courses:", student1.getTotalEnrolledCourses());

mathTeacher.viewEnrolledStudents("Algebra");
nest new project-name