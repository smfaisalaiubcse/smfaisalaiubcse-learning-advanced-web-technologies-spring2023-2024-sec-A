var data;
data = "Something";
console.log(data);
var Color;
(function (Color) {
    Color["Red"] = "faisal";
    Color["Green"] = "sadat";
    Color["Blue"] = "kudrot";
})(Color || (Color = {}));
;
var color = Color.Red;
console.log(color);
var employee;
employee = [1, "faisal"];
console.log(employee);
