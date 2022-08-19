import * as React from "react";
import Conversion from "./Conversion.js";

export default class Time extends React.Component {
  render() {
    return (
      <Conversion
        convert_type1={"km"}
        convert_type2={"m"}
        convert_type3={"cm"}
        convert_type4={"miles"}
      />
    );
  }
}
