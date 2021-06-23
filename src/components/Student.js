import React from "react";

function Student({student}){
    console.log(student);
    // TODO: create a function that takes the average of student.grades
    console.log(student.grades);
    return (<div id={student.id} className="container">
        <div className="row row-controller">
            <div className="col-2">
                <img className="student-image" src={student.pic} alt={student.firstName}/>
            </div>
            <div className="col-10">
                <h2>{student.firstName} {student.lastName}</h2>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {student.grades}</p>
            <div>
            
        <div>
            {student.grades}
        </div>
        </div>
        </div>
        </div>
    </div>); 
}

export default Student;