import React from "react";

function Student({student}){
// console.log(student);
// TODO: create a function that takes the average of student.grades

// console.log(student.grades);
let apiArray = student.grades;
// console.log(apiArray.map(i=>Number(i)));
let apiArrayedNums = apiArray.map(i=>Number(i));
// console.log(apiArrayedNums);

let total = 0;
for(let i = 0; i < apiArrayedNums.length; i++) {
    total += apiArrayedNums[i];
}
let avg = total / apiArrayedNums.length;
// console.log(avg);


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
                <p>Average Grade: <strong>{avg}</strong></p>
                <ul className="grades-controller">
                    <li>Test 1:    {apiArrayedNums[0]}</li>
                    <li>Test 2:    {apiArrayedNums[1]}</li>
                    <li>Test 3:    {apiArrayedNums[2]}</li>
                    <li>Test 4:    {apiArrayedNums[3]}</li>
                    <li>Test 5:    {apiArrayedNums[4]}</li>
                    <li>Test 6:    {apiArrayedNums[5]}</li>
                    <li>Test 7:    {apiArrayedNums[6]}</li>
                    <li>Test 8:    {apiArrayedNums[7]}</li>
                </ul>
            </div>
        </div>
        <hr />
    </div>); 
}

export default Student;