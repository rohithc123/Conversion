import * as React from "react";
import Conversion from "./Conversion.js";

export default class Time extends React.Component {
  render() {
    return (
      <Conversion
        convert_type1={"hours"}
        convert_type2={"seconds"}
        convert_type3={"minutes"}
        convert_type4={"ms"}
      />
    );
  }
}
