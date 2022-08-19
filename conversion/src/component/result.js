import * as React from "react";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: props.result, type2: props.type2 };
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.result} {this.state.type2}
        </h1>
      </div>
    );
  }
}
