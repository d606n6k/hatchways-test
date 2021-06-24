import React, { Component } from "react";
import apiCall from "../utils/api";
import Student from "./Student"
import FilterName from "./FilterName";
import FilterTag from "./FilterTag";

class SectionOne extends Component {

    state = {
        apiStudents: [],
        filterName: "",
        filterTag: "",
        filteredName: []
    };

    async componentDidMount() {
      this.getStudents();
      //  console.log(this.state.apiStudents)
    }

    // this is working as intended
    getStudents = () => {
        apiCall.fetchApi()
        .then((res) => {
          const students = res.data.students.map(student => {
            return {...student, tags: []}
          })
          this.setState({apiStudents: students})
        this.handleFilter();
      })
        .catch((err) => console.log(err));
      };

       handleInputChange = async (event) => {
        const name = event.target.name;
        const value = event.target.value;
        await this.setState({
          [name]: value,
        });
        // console.log(value);
        this.handleFilter();
      };

      handleAddTag = (id, value) => {
        // event.preventDefault();
        // alert(event.target.id);
        
        // console.log(event.target.value);
        if(value){
          const tagApply = this.state.apiStudents.map(student =>{
            if(student.id === id){
              student.tags.push(value);
            }
            return student;
          })
          this.setState({
            apiStudents: tagApply
          })
        }
       
      }
    
      handleFilter = () => {
        const filterName = this.state.filterName.toLowerCase();
        const filterTag = this.state.filterTag;
        let filteredName;
        if(filterName){
          filteredName = this.state.apiStudents.filter(student => {
          const name = `${student.firstName} ${student.lastName}`;
          // we will need to add filterTag functionality here when it is implemented for each student 
          if(name.toLowerCase().includes(filterName)){
            return student;
          }
        })
      }else{
         filteredName = this.state.apiStudents;
      }
      console.log(filteredName);
      console.log(filterName);
        this.setState({
          filteredName
        })
        // console.log(this.state.filteredName);
      }

      render() {
        console.log(this.state)
       return <div>
         <h1 id="title-head">Hatchways Coding Test - by William Lucht</h1>
         <hr />
         <FilterName handleInputChange={this.handleInputChange} />
         <FilterTag handleInputChange={this.handleInputChange} />
         {this.state.filteredName.map((student, index) => {
           return (<Student student={student} handleAddTag={this.handleAddTag} />)
         })}
       </div>;
      
      
      }
          
    }
    
export default SectionOne;