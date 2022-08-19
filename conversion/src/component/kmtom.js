import * as React from "react";
import styles from "../styles/kmtom.css";
import Calculate from "./calculate.js";
import convert from "convert";
import Distance2 from "./distance.js";

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
    this.state = {
      value: "100",
      result: props.result,
      type1: props.type1,
      type2: props.type2,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      result: convert(parseFloat(this.state.value), this.state.type1).to(
        this.state.type2
      ),
    });

    //  alert("A name was submitted: " + this.state.result);
  }

  render() {
    return (
      <div>
        {/* <label>
              {this.state.type1}
              <input
                type="number"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter the value in kilometre"
                className="enter_area"
              />{" "}
            </label>
          </div>
          <input type="submit" value="Submit" className="submit_btn" /> */}
        <div className="result">
          <h1>
            {this.state.result} {this.state.type2}
          </h1>
        </div>
      </div>
    );
  }
}
