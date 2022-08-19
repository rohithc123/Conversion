// import * as React from "react";
// import { setState } from "react";
// export default class Calculate extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: props.num };
//   }

//   render() {
//     return (
//       <div>
//         <h1>{convert(parseFloat(this.state.value), "km").to("m")}</h1>
//       </div>
//     );
//   }
// }
import convert from "convert";
import React from "react";
const Calculate = (props, event) => {
  event.preventDefault();

  return (
    <div>
      <h1>{convert(parseFloat(this.state.value), "km").to("m")}</h1>
    </div>
  );
};
export default Calculate;
