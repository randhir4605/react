function FullName(props){
    let employee=props.employee;
    return employee.firstName+" "+employee.lastName;
}

export default FullName;