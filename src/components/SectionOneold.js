import React, { useState } from "react";
import apiCall from "../utils/api";

function sectionOne(){
const [apiStudents, setApistudents] = useState({
  students: []
}); 

const [image, setImage] = useState(""); 


function getStudents() {
  apiCall.fetchApi()
      .then((res) => console.log(res.data))
      .then((res) => setApistudents(res.data)
      // .then((res) => this.setState(...this.state,{image: res.data.students[0].pic}))
      //   .then(console.log(this.state))
      .catch((err) => console.log(err));
      // this.setState({ projects: API });
      // console.log(this.state);
      return;
}
}



    
export default sectionOne;