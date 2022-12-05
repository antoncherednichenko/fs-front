import { FC, useMemo } from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { truncate } from "lodash";
import { avatar, userInfo } from "./styles";
import { IUserInfoProps } from "./types";

const UserInfo: FC<IUserInfoProps> = ({ email, role }) => {
  const theme = useTheme();
  const user = useMemo(() => {
    const splited = email.split("@") || "";
    return {
      letters: splited.at(0)?.slice(0, 2) || "Hi",
      name: truncate( splited.at(0), { length: 15 }) || "unknown",
    };
  }, [email]);
  return (
    <Box sx={userInfo(theme)}>
      <Avatar sx={avatar(theme, 65)}>{user.letters}</Avatar>
      <Box>
        <Typography variant="body2">{user.name}</Typography>
        <Typography>{role}</Typography>
      </Box>
    </Box>
  );
};

export { UserInfo };
