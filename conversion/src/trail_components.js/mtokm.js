import React from "react";
import styles from "../styles/kmtom.css";

export default class Mtokm extends React.Component {
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
    event.preventDeafult();

    this.setState({ result: parseFloat(this.state.value) / 1000 });
    // return (
    //   <h1>
    //     <Calculate num={this.state.value} />
    //   </h1>
    // );

    //  alert("A name was submitted: " + this.state.result);
  }

  render() {
    return (
      <div className="area">
        <form onSubmit={this.handleSubmit}>
          <div className="name">
            <label>
              Metre:
              <input
                type="number"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter the value in Metre"
                className="enter_area"
              />{" "}
            </label>
          </div>
          <input type="submit" value="Submit" className="submit_btn" />
        </form>
        <div className="result">
          <h1>{this.state.result + " km"}</h1>
        </div>
      </div>
    );
  }
}
