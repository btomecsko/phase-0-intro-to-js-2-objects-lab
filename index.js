// Write your solution in this file!
const employee = {
    name: 'Parker',
    streetAddress: '123 Parker Street'
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee, 'name' : 'Sam', 'streetAddress' : '11 Broadway'}
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    delete newObj.name;
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
};

