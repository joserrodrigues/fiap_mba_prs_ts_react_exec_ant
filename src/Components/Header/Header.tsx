import React, { useContext } from "react";
import UserInfoContext, {
  UserInfoContextType,
} from "../../Store/UserInfo/UserInfoContext";
import CustomButton from "../CustomButton/CustomButton";
import { Typography, Stack } from "@mui/material";

const Header = () => {
  const context = useContext<UserInfoContextType>(UserInfoContext);
  return (
    <div>
      <Stack direction="row" justifyContent="flex-end" alignItems="center">
        <Typography
          gutterBottom
          variant="subtitle2"
          className="textHeader"
        ></Typography>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <CustomButton onClick={() => context.makeLogOut()}>LogOut</CustomButton>
      </Stack>
    </div>
  );
};

export default Header;
