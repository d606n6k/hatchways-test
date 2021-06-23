import React, { Component } from "react";
import apiCall from "../utils/api";
import Student from "./Student"
import FilterName from "./FilterName";
import FilterTag from "./FilterTag";

class SectionOne extends Component {

    state = {
        apiStudents: [],

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

      handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value,
        });
      };

      render() {
        // console.log(this.state)
       return <div>
         <h1 id="title-head">Hatchways Coding Test - by William Lucht</h1>
         <hr />
         <FilterName handleInputChange={this.handleInputChange} />
         <FilterTag handleInputChange={this.handleInputChange} />
         {this.state.apiStudents.map((student, index) => {
           return (<Student student={student} />)
         })}
       </div>;
      
      
      }
          
    }
    
export default SectionOne;