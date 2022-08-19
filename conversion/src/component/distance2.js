// import * as React from "react";
// import { useState } from "react";
// import { setState } from "react";
// import { styled, alpha } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import Menu, { MenuProps } from "@mui/material/Menu";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import Conversion_type from "./conversion_type.js";

// // const StyledMenu = styled((props: MenuProps) => (
// //   <Menu
// //     elevation={0}
// //     anchorOrigin={{
// //       vertical: "bottom",
// //       horizontal: "right",
// //     }}
// //     transformOrigin={{
// //       vertical: "top",
// //       horizontal: "right",
// //     }}
// //     {...props}
// //   />
// // ))(({ theme }) => ({
// //   "& .MuiPaper-root": {
// //     borderRadius: 6,
// //     marginTop: theme.spacing(1),
// //     minWidth: 150,
// //     color:
// //       theme.palette.mode === "light"
// //         ? "rgb(55, 65, 81)"
// //         : theme.palette.grey[300],
// //     boxShadow:
// //       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
// //     "& .MuiMenu-list": {
// //       padding: "4px 0",
// //     },
// //     "& .MuiMenuItem-root": {
// //       "& .MuiSvgIcon-root": {
// //         fontSize: 18,
// //         color: theme.palette.text.secondary,
// //         marginRight: theme.spacing(1.5),
// //       },
// //       "&:active": {
// //         backgroundColor: alpha(
// //           theme.palette.primary.main,
// //           theme.palette.action.selectedOpacity
// //         ),
// //       },
// //     },
// //   },
// // }));
// // let setAnchorEl = null;
// export default class Distance2 extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     anchorEl: null,

//   //     select_option: null,
//   //     open: Boolean(this.stasetAnchorEl),

//   //     // event: React.MouseEvent<HTMLElement>
//   //   };
//   // }

//   // handleClick(event) {
//   //   this.setState({ setAnchorEl: event.currentTarget });
//   // }

//   // handleClose() {
//   //   this.setState({ setAnchorEl: null });
//   // }
//   // render() {
//   //   return (
//   //     <div>
//   //       <Button
//   //         id="demo-customized-button"
//   //         aria-controls={this.state.open ? "demo-customized-menu" : undefined}
//   //         aria-haspopup="true"
//   //         aria-expanded={this.state.open ? "true" : undefined}
//   //         variant="contained"
//   //         disableElevation
//   //         onClick={this.state.handleClick}
//   //         endIcon={<KeyboardArrowDownIcon />}
//   //       >
//   //         select
//   //       </Button>
//   //       <StyledMenu
//   //         id="demo-customized-menu"
//   //         MenuListProps={{
//   //           "aria-labelledby": "demo-customized-button",
//   //         }}
//   //         anchorEl={this.state.anchorEl}
//   //         open={this.state.open}
//   //         onClose={this.state.handleClose}
//   //       >
//   //         {/* <MenuItem onClick={handleClose} disableRipple className="align">
//   //         km
//   //       </MenuItem>
//   //       <MenuItem onClick={handleClose} disableRipple className="align">
//   //         m
//   //       </MenuItem>
//   //       <MenuItem onClick={handleClose} disableRipple className="align">
//   //         cm
//   //       </MenuItem>
//   //       <MenuItem onClick={handleClose} disableRipple className="align">
//   //         miles
//   //       </MenuItem> */}
//   //         <div onClick={this.state.handleClose}>
//   //           <Conversion_type name="km" />
//   //           <Conversion_type name="m" />
//   //           <Conversion_type name="cm" />
//   //           <Conversion_type name="miles" />
//   //         </div>
//   //       </StyledMenu>
//   //       <Button
//   //         id="demo-customized-button"
//   //         aria-controls={this.state.open ? "demo-customized-menu" : undefined}
//   //         aria-haspopup="true"
//   //         aria-expanded={this.state.open ? "true" : undefined}
//   //         variant="contained"
//   //         disableElevation
//   //         onClick={this.state.handleClick}
//   //         endIcon={<KeyboardArrowDownIcon />}
//   //       >
//   //         select
//   //       </Button>
//   //       <StyledMenu
//   //         id="demo-customized-menu"
//   //         MenuListProps={{
//   //           "aria-labelledby": "demo-customized-button",
//   //         }}
//   //         anchorEl={this.state.anchorEl}
//   //         open={this.state.open}
//   //         onClose={this.state.handleClose}
//   //       >
//   //         {/* <MenuItem onClick={handleClose} disableRipple className="align">
//   //         km
//   //       </MenuItem>
//   //       <MenuItem onClick={handleClose} disableRipple className="align">
//   //         m
//   //       </MenuItem>
//   //       <MenuItem onClick={handleClose} disableRipple className="align">
//   //         cm
//   //       </MenuItem>
//   //       <MenuItem onClick={handleClose} disableRipple className="align">
//   //         miles
//   //       </MenuItem> */}
//   //         <div onClick={this.state.handleClose}>
//   //           <Conversion_type name="km" />
//   //           <Conversion_type name="m" />
//   //           <Conversion_type name="cm" />
//   //           <Conversion_type name="miles" />
//   //         </div>
//   //       </StyledMenu>
//   //     </div>
//   render() {
//     return (
//       <FormControl fullWidth>
//         <InputLabel variant="standard" htmlFor="uncontrolled-native">
//           Age
//         </InputLabel>
//         <NativeSelect
//           defaultValue={30}
//           inputProps={{
//             name: "age",
//             id: "uncontrolled-native",
//           }}
//         >
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </NativeSelect>
//       </FormControl>
//     );
//   }
// }

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
// import styles from "../styles/distance2.css";
import Calculate from "./calculate.js";
import styles from "../styles/kmtom.css";
import { setState } from "react";
import Kmtom from "./kmtom.js";
import convert from "convert";

export default class Distance2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0",
      result: "0",
      type1: "km",
      type2: "cm",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // constructor(props) {
  //   super(props);
  //   this.state = { calculate1: "From", calculate2: "To", type1: "", type2: "" };
  //   this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleType1 = this.handleType1.bind(this);
  // }
  // handleChange(event) {
  //   // this.setState({ calculate1: event.target.calculate1 });
  //   this.setState({ value: event.target.value });
  // }

  // handleType1(event) {
  //   event.preventDeafult();
  //   this.setState({ type1: event.target.value });
  //   console.log(this.state.type1);
  //   // this.setState({ result: parseFloat(this.state.value) / 1000 });
  //   //  alert("A name was submitted: " + this.state.result);
  // }
  // render() {
  //   return (
  //     <div>
  //       <Box sx={{ minWidth: 120 }} className="align">
  //         <FormControl sx={{ minWidth: 120 }}>
  //           <InputLabel variant="standard" htmlFor="uncontrolled-native">
  //             Hello
  //           </InputLabel>
  //           <NativeSelect
  //             defaultValue={"miles"}
  //             inputProps={{
  //               name: "age",
  //               id: "uncontrolled-native",
  //             }}
  //           >
  //             <option value={"km"}>km</option>
  //             <option value={"cm"}>cm</option>
  //             <option value={"miles"}>miles</option>
  //           </NativeSelect>
  //         </FormControl>

  //         <FormControl sx={{ minWidth: 120 }}>
  //           <InputLabel variant="standard" htmlFor="uncontrolled-native">
  //             {this.state.calculate2}
  //           </InputLabel>
  //           <NativeSelect
  //             defaultValue={30}
  //             inputProps={{
  //               name: "age",
  //               id: "uncontrolled-native",
  //             }}
  //           >
  //             {/* <option onClick={this.handleChange(10)}>km</option> */}
  //             <option>m</option>
  //             <option>cm</option>
  //             <option>miles</option>
  //           </NativeSelect>
  //         </FormControl>
  //       </Box>
  //     </div>
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
    // this.setState({ type1: event.target.type1 });
    // this.setState({ type2: event.target.type2 });

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
        <div className="name">
          <form onSubmit={this.handleSubmit}>
            {/* <input
              type="text"
              // value={this.state.type1}
              onChange={this.handleChange1}
              placeholder="Enter the From option"
              className="enter_area"
            />{" "}
            <input
              type="text"
              // value={this.state.type2}
              onChange={this.handleChange2}
              placeholder="Enter the To option"
              className="enter_area"
            />{" "} */}
            <Box sx={{ minWidth: 120 }} className="align">
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  From
                </InputLabel>
                <NativeSelect
                  defaultValue={"km"}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  onChange={this.handleChange1}
                >
                  <option value={"km"}>km</option>
                  <option value={"cm"}>cm</option>
                  <option value={"miles"}>miles</option>
                </NativeSelect>
              </FormControl>

              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  To
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  onChange={this.handleChange2}
                >
                  {/* <option onClick={this.handleChange(10)}>km</option> */}
                  <option>m</option>
                  <option>cm</option>
                  <option>miles</option>
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
            <h1>
              {this.state.result} {this.state.type2}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
