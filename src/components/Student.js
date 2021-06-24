import React, {useState} from "react";

function Student({student, handleAddTag, handleCollapse}){
// console.log(student);

const [tagState, setTagState] = useState("");


const collapsed = student.collapsed;
async function handleTagChange(e){
    await setTagState(e.target.value)
}

function handleButtonClick(event){
    event.preventDefault();
    const id = event.target.id;
    const value = event.target.value;
    handleAddTag(id, value);
    setTagState('');
}

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
            <div className="col-12 col-sm-2">
                <img className="student-image" src={student.pic} alt={student.firstName}/>
            </div>
            <div className="col-12 col-sm-10">
                <h2>{student.firstName} {student.lastName}</h2>
                    <button id={student.id} className="grades-button" onClick={handleCollapse}>{collapsed ? "+" : "-"}</button>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average Grade: <strong>{avg}</strong></p>
                {!collapsed && <ul className="grades-controller">
                    <li>Test 1:    {apiArrayedNums[0]}</li>
                    <li>Test 2:    {apiArrayedNums[1]}</li>
                    <li>Test 3:    {apiArrayedNums[2]}</li>
                    <li>Test 4:    {apiArrayedNums[3]}</li>
                    <li>Test 5:    {apiArrayedNums[4]}</li>
                    <li>Test 6:    {apiArrayedNums[5]}</li>
                    <li>Test 7:    {apiArrayedNums[6]}</li>
                    <li>Test 8:    {apiArrayedNums[7]}</li>
                </ul>}
                <div className="flex-div">
                {student.tags.map((tag, index) =>{
                    return <p key={index} className="tag-control">{tag}</p>
                })}
                </div>
               
                
                <form className="tag-input-control">
                    <input type="text" value={tagState} onChange={handleTagChange} placeholder="Add a tag"/>
                    <button onClick={handleButtonClick} value={tagState} type="submit" id={student.id}>Submit Tag</button>
                </form>
            </div>
        </div>
        <hr />
    </div>); 
}

export default Student;