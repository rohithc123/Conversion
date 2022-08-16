// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import { Navbar } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] =
    (React.useState < null) | (HTMLElement > null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

// function Distance() {
//   return (
//     // <Navbar variant="dark" bg="dark" expand="lg">
//     //   <Container fluid>
//     //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//     //     <Navbar.Toggle aria-controls="navbar-dark-example" />
//     //     <Navbar.Collapse id="navbar-dark-example">
//     //       <Nav>
//     //         <NavDropdown
//     //           id="nav-dropdown-dark-example"
//     //           title="Dropdown"
//     //           menuVariant="dark"
//     //         >
//     //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//     //           <NavDropdown.Item href="#action/3.2">
//     //             Another action
//     //           </NavDropdown.Item>
//     //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//     //           <NavDropdown.Divider />
//     //           <NavDropdown.Item href="#action/3.4">
//     //             Separated link
//     //           </NavDropdown.Item>
//     //         </NavDropdown>
//     //       </Nav>
//     //     </Navbar.Collapse>
//     //   </Container>
//     // </Navbar>
//     <div className="dropdown">
//       <button
//         className="btn btn-secondary dropdown-toggle"
//         type="button"
//         id="dropdownMenuButton"
//         data-toggle="dropdown"
//         aria-haspopup="true"
//         aria-expanded="false"
//       >
//         Dropdown button
//       </button>
//       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//         <a className="dropdown-item" href="#">
//           Action
//         </a>
//         <a className="dropdown-item" href="#">
//           Another action
//         </a>
//         <a className="dropdown-item" href="#">
//           Something else here
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Distance;
// import React from "react";
// import styles from "../styles/distance.css";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// // function Distance() {
// //   return (
// //     <DropdownButton id="dropdown-basic-button" title="Dropdown button">
// //       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
// //       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
// //       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
// //     </DropdownButton>
// //   );
// // }

// // export default Distance;

// export default class Distance extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "", result: "0" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDeafult();

//     this.setState({ result: parseFloat(this.state.value) / 1000 });

//     //  alert("A name was submitted: " + this.state.result);
//   }

//   render() {
//     return (
//       <div className="area">
//         <form onSubmit={this.handleSubmit}>
//           <div className="name">
//             <label>
//               Metre:
//               {/* <input
//                 type="number"
//                 value={this.state.value}
//                 onChange={this.handleChange}
//                 placeholder="Enter the value in Metre"
//                 className="enter_area"
//               />{" "} */}
//               <DropdownButton
//                 id="dropdown-basic-button"
//                 title="Dropdown button"
//                 size="lg"
//               >
//                 <Dropdown.Item href="#/action-1">km</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">m</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">cm</Dropdown.Item>
//               </DropdownButton>
//             </label>
//           </div>
//           <input type="submit" value="Submit" className="submit_btn" />
//         </form>
//         <div className="result">
//           <h1>{this.state.result + " km"}</h1>
//         </div>
//       </div>
//     );
//   }
// }
