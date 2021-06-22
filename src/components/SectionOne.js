import React, { Component } from "react";
import apiCall from "../utils/api";

class SectionOne extends Component {

    state = {
        apiStudents: {
            // students: [],
        },
        image: ""
        // students: [],
    };

    async componentDidMount() {
        this.getStudents();
        console.log(this.state.apiStudents)
    }
    
    getStudents = () => {
        apiCall.fetchApi()
        // .then((res) => console.log(res.data))
        .then((res) => {
          const data = res.data;
          // console.log(data) 
          this.setState({apiStudents: data.students })
        })
        // .then((res) => this.setState(...this.state,{image: res.data.students[0].pic}))
        //   .then(console.log(this.state))
        .catch((err) => console.log(err));
    
      };
    
      render() {
          const stuImage = this.state.apiStudents;
          console.log(stuImage)
        // console.log(this.state.apiStudents);
        // console.log(this.state.image);
          return(
            <div>
                {/* <h1>{[0].city}</h1> */}
                {/* <img src={stuImage[0].pic} alt="students pic" /> */}
                {/* {stuImage.map((students, index)=>{
                  return <h1>{[0].city}</h1>
                })} */}
            </div>
            // <div>
            //     {this.students[0] ? <img src={this.apiStudents.students[0].pic} alt="students pic" /> : <div>"Loading"</div>}
            // </div>
          )
      }      
    }
    
export default SectionOne;