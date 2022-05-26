import {FC, MouseEventHandler} from "react";
import { Button } from "@mui/material";
import "./CustomButton.css";

type IProps = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
  type?: string
};
const CustomButton:FC<IProps> = ({ onClick, type, children }) => {
  return (
    <Button className="customButton" variant="contained" onClick={onClick} >
      {children}
    </Button>
  );
};

export default CustomButton;
