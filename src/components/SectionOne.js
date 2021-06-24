import React, { Component } from "react";
import apiCall from "../utils/api";
import Student from "./Student"
import FilterName from "./FilterName";
import FilterTag from "./FilterTag";

class SectionOne extends Component {
// our states
  state = {
      apiStudents: [],
      filterName: "",
      filterTag: "",
      filteredTag: []
  };
// when the page first loads, run the axios api GET request
  async componentDidMount() {
    this.getStudents();
  }

// this function will fetch the students json data from the API using Axios. Once fetched it is saved in our state to use in our app
  getStudents = () => {
      apiCall.fetchApi()
      .then((res) => {
        const students = res.data.students.map(student => {
          return {...student, tags: [], collapsed: true}
        })
        this.setState({apiStudents: students})
      this.handleFilter();
    })
      .catch((err) => console.log(err));
    };

// this function tracks the character inputs for the name filter and tag filter and stores them in a React state
    handleInputChange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    await this.setState({
      [name]: value,
    });
    this.handleFilter();
  };

// this function handles showing the grades unordered list
  handleCollapse = (event) => {
    // prevent default behavior of the event click
    event.preventDefault();
    const studentGrades = this.state.apiStudents.map(student => {
      if(student.id === event.target.id){
        student.collapsed = !student.collapsed
      }
      return student;
    })
    this.setState({
      apiStudents: studentGrades
    })
  }

// this function adds the tag to the page
    handleAddTag = (id, value) => {
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
    // this function handles filtering the students by name and by tags
    handleFilter = () => {
      const filterName = this.state.filterName.toLowerCase();
      const filterTag = this.state.filterTag.toLowerCase();
      let filteredName;
      let filteredTag;
      // filter by name
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

      // filter by tag
      if(filterTag){
        filteredTag = filteredName.filter(student => {
          let hasTag = false;
          student.tags.forEach(tag => {
            if(tag.toLowerCase().includes(filterTag)){
              hasTag = true;
            }
          })
          return hasTag;
        })
      }else{
        filteredTag = filteredName;
      }
  
      this.setState({
        filteredTag,
      })
    }

    // this is our React render function to output everything to the page
    render() {
      console.log(this.state)
      const theFilteredStuff = this.state.filteredTag.length === 0;
      return <div>
        <h1 id="title-head">Hatchways Coding Test - by William Lucht</h1>
        <hr />
        <FilterName handleInputChange={this.handleInputChange} />
        <FilterTag handleInputChange={this.handleInputChange} />
        {!theFilteredStuff && this.state.filteredTag.map((student, index) => {
          return (<Student student={student} handleAddTag={this.handleAddTag} handleCollapse={this.handleCollapse}/>)
        })}
        {theFilteredStuff && <p className="text-center">There are no results found!</p>
        }
      </div>;
    } 
  }
  
export default SectionOne;