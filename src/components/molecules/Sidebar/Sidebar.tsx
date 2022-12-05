
import { Stack, useTheme, Divider, Typography } from "@mui/material";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { renderIcon } from "utils";
import { divider, sidebarItem, stack } from "./styles";
import { ISidebarProps } from "./types";

const Sidebar: FC<ISidebarProps> = ({ items }) => {
  const theme = useTheme()
  const location = useLocation()
  return (
    <>
      <Stack
        component="nav"
        sx={stack(theme)} 
        spacing={0} 
        divider={
          <Divider
            sx={divider(theme)}
            orientation="horizontal" 
            flexItem 
          />
        }
      >
        {items.map((item) => (
          <Link key={item.url} to={item.url}>
            <Typography component="span" 
              sx={sidebarItem(theme, location.pathname === item.url)}
            >
              {renderIcon(item.icon, 20)}
              {item.title}
            </Typography>
          </Link>
        ))}
      </Stack>
    </>
  );
};

export { Sidebar };
