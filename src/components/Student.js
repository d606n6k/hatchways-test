import React from "react";

function Student({student}){
    console.log(student);
    return (<div>{student.city}</div>); 
}

export default Student;