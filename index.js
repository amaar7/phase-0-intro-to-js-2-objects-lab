// Write your solution in this file!
let employee = {
    "name": "Amar",
    "streetAddress": "1234 Moi Avenue, nairobi"
};
function updateEmployeeWithKeyAndValue(employee, key,value){
    return {...employee, [key]: value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key)  {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
const updateEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
console.log(updateEmployee);

const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "John");
console.log(destructivelyUpdatedEmployee);

const employeeWithoutKey = deleteFromEmployeeByKey(employee, "streetAddress");
console.log(employeeWithoutKey);

const destructivelyUpdatedEmployeeWithoutKey = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log(destructivelyUpdatedEmployeeWithoutKey);