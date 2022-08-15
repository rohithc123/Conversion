import * as React from "react";
import styles from "../styles/kmtom.css";

// export default class Kmtom extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inp: "",
//       result: "10",
//     };
//   }
//   handleChange(event) {
//     this.setState({ inp: event.target.inp });
//   }
//   calculate = () => {
//     this.setState({ result: this.state.inp / 1000 });
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             value={this.state.inp}
//             onChange={this.handleChange}
//             placeholder="Enter the value"
//           />
//         </form>
//         <button onClick={() => this.calculate()}>Result</button>
//         <div>{this.state.result}</div>
//       </div>
//     );
//   }
// }
export default class Kmtom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", result: "0" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.setState({ result: parseFloat(this.state.value) * 1000 });

    //  alert("A name was submitted: " + this.state.result);
    event.preventDefault();
  }

  render() {
    return (
      <div className="area">
        <form onSubmit={this.handleSubmit}>
          <div className="name">
            <label>
              Kilometre:
              <input
                type="number"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter the value in kilometre"
                className="enter_area"
              />{" "}
            </label>
          </div>
          <input type="submit" value="Submit" className="submit_btn" />
        </form>
        <div className="result">
          <h1>{this.state.result + " m"}</h1>
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import "./CSS/todo.css";

// class Form extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             firstName: "",
//             lastName: "",
//             password: "",
//             gender: "",

//         }
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }

//     firsthandler = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }
//     lasthandler = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }
//     passwordhandler = (event) => {
//         this.setState({
//             password: event.target.value
//         })
//     }

//     genderhandler = (event) => {
//         this.setState({
//             gender: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
//         console.log(this.state);
//         this.setState({
//             firstName: "",
//             lastName: "",
//             password: '',
//             gender: "",
//         })
//      event.preventDefault()

//     }

//     render() {
//         return (
//             <div>

//                 <form onSubmit={this.handleSubmit}>
//                     <h1>User Registration</h1>
//                     <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
//                     <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
//                     <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
//                     <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
//                         <option defaultValue>Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                     </select><br />
//                     <input type="submit" value="Submit" />
//                 </form>

//             </div>

//         )
//     }
// }

// export default Form
