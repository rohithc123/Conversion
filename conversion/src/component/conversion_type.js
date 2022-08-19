import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Conversion_type = (props) => {
  return <MenuItem className="align">{props.name}</MenuItem>;
};

export default Conversion_type;
