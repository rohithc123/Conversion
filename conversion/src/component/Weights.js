import * as React from "react";
import Conversion from "./Conversion.js";

export default class Weights extends React.Component {
  render() {
    return (
      <Conversion
        convert_type1={"kg"}
        convert_type2={"pounds"}
        convert_type3={"ounces"}
        convert_type4={"grams"}
      />
    );
  }
}
