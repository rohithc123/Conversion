import * as React from "react";
import Conversion from "./Conversion.js";

export default class Distance extends React.Component {
  render() {
    return (
      <Conversion
        convert_type1={"km"}
        convert_type2={"miles"}
        convert_type3={"nautical miles"}
        convert_type4={"m"}
      />
    );
  }
}

// import * as React from "react";
// import { useState } from "react";
// import { setState } from "react";
// import { styled, alpha } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import Menu, { MenuProps } from "@mui/material/Menu";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import Conversion_type from "./conversion_type.js";

// const StyledMenu = styled((props: MenuProps) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "right",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiPaper-root": {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 150,
//     color:
//       theme.palette.mode === "light"
//         ? "rgb(55, 65, 81)"
//         : theme.palette.grey[300],
//     boxShadow:
//       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//     "& .MuiMenu-list": {
//       padding: "4px 0",
//     },
//     "& .MuiMenuItem-root": {
//       "& .MuiSvgIcon-root": {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       "&:active": {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity
//         ),
//       },
//     },
//   },
// }));

// export default function Distance(props) {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [select_option] = useState(null);

//   const open = Boolean(anchorEl);
//   // event: React.MouseEvent<HTMLElement>
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = (value) => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? "demo-customized-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         variant="contained"
//         disableElevation
//         onClick={handleClick}
//         endIcon={<KeyboardArrowDownIcon />}
//       >
//         {select_option}
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           "aria-labelledby": "demo-customized-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         {/* <MenuItem onClick={handleClose} disableRipple className="align">
//           km
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple className="align">
//           m
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple className="align">
//           cm
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple className="align">
//           miles
//         </MenuItem> */}
//         <div onClick={handleClose}>
//           <Conversion_type name="km" />
//           <Conversion_type name="m" />
//           <Conversion_type name="cm" />
//           <Conversion_type name="miles" />
//         </div>
//       </StyledMenu>
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? "demo-customized-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         variant="contained"
//         disableElevation
//         onClick={handleClick}
//         endIcon={<KeyboardArrowDownIcon />}
//       >
//         {select_option}
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           "aria-labelledby": "demo-customized-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         {/* <MenuItem onClick={handleClose} disableRipple className="align">
//           km
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple className="align">
//           m
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple className="align">
//           cm
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple className="align">
//           miles
//         </MenuItem> */}
//         <div onClick={handleClose}>
//           <Conversion_type name="km" />
//           <Conversion_type name="m" />
//           <Conversion_type name="cm" />
//           <Conversion_type name="miles" />
//         </div>
//       </StyledMenu>
//     </div>
//   );
// }
