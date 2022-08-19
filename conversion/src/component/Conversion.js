import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import styles from "../styles/conversion.css";
import convert from "convert";

export default class Conversion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0",
      result: "0",
      size_select_option: 150,
      type1: props.convert_type1,
      type2: props.convert_type2,
      convert_type1: props.convert_type1,
      convert_type2: props.convert_type2,
      convert_type3: props.convert_type3,
      convert_type4: props.convert_type4,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChange1(event) {
    this.setState({ type1: event.target.value });
  }
  handleChange2(event) {
    this.setState({ type2: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      result: convert(parseFloat(this.state.value), this.state.type1).to(
        this.state.type2
      ),
    });
  }
  render() {
    return (
      <div className="area">
        <div className="name">
          <form onSubmit={this.handleSubmit}>
            <Box>
              <FormControl sx={{ minWidth: this.state.size_select_option }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  From
                </InputLabel>
                <NativeSelect
                  defaultValue={this.state.convert_type1}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  onChange={this.handleChange1}
                >
                  <option value={this.state.convert_type1}>
                    {this.state.convert_type1}
                  </option>
                  <option value={this.state.convert_type2}>
                    {this.state.convert_type2}
                  </option>
                  <option value={this.state.convert_type3}>
                    {this.state.convert_type3}
                  </option>
                  <option value={this.state.convert_type4}>
                    {this.state.convert_type4}
                  </option>
                </NativeSelect>
              </FormControl>

              <FormControl
                sx={{
                  minWidth: this.state.size_select_option,
                  paddingLeft: 5,
                }}
              >
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  sx={{ paddingLeft: 7 }}
                >
                  To
                </InputLabel>
                <NativeSelect
                  defaultValue={this.state.convert_type2}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  onChange={this.handleChange2}
                >
                  <option value={this.state.convert_type1}>
                    {this.state.convert_type1}
                  </option>
                  <option value={this.state.convert_type2}>
                    {this.state.convert_type2}
                  </option>
                  <option value={this.state.convert_type3}>
                    {this.state.convert_type3}
                  </option>
                  <option value={this.state.convert_type4}>
                    {this.state.convert_type4}
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>

            <label>
              {this.state.type1}
              <input
                type="number"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter the value in kilometre"
                className="enter_area"
              />{" "}
            </label>
            <input type="submit" className="submit_btn" />
          </form>
          <div className="result">
            {" "}
            <h1>
              {this.state.result} {this.state.type2}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
