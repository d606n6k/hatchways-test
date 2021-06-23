import React, { Component } from "react";
import apiCall from "../utils/api";
import Student from "./Student"

class SectionOne extends Component {

    state = {
        apiStudents: [],
        filter: []
        // image: ""
        // students: [],
    };

    async componentDidMount() {
        this.getStudents();
    }

    // this is working as intended
    getStudents = () => {
        apiCall.fetchApi()
        .then((res) => this.setState({apiStudents: res.data.students }))
        .catch((err) => console.log(err));
      };

      render() {
        console.log(this.state)
        // // const studentSort = [...this.state.apiStudents.students]
        // const apiIteration = [this.state.apiStudents].map(item => {
        //   return (
        //     <div>{item}</div>
        //   )
        // });
        // console.log(apiIteration);
        // const apiStudents = this.state;
       return <div>
         <h1>Hatchways Coding Test - by William Lucht</h1>
         {/* <div>{children}</div> */}
         {this.state.apiStudents.map((student, index) => {
           return (<Student student={student} />)
         })}
       </div>;
      
      
      }
          
    }
    
export default SectionOne;