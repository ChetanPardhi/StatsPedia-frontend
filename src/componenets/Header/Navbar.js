import {
  CompanyLogoContainer,
  HeaderComponent,
  HeaderPages,
  NavbarDesktop,
} from "./styles";
import { Pages } from "../../constants/index.js";
import {
  ListItemText,
  ListItem,
} from "@mui/material";
import Logo from "../../images/StatsPedia_blackBackgroundLogo.png";
import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <NavbarDesktop className="hu">
      <HeaderComponent>
        <CompanyLogoContainer>
          <img style={{ height: "100px" }} src={Logo} alt="sh" />
        </CompanyLogoContainer>
        <HeaderPages>
          {Pages.map((page) => (
            <ListItem sx={{ m : -2 , p:0, maxWidth : "150px"} }>
              <ListItemText
                sx={{textAlign : "center", color: "white", width : "0px" }}
                primary={page.title}
              />
            </ListItem>
          ))}
        </HeaderPages>
      </HeaderComponent>
      <Drawer />
    </NavbarDesktop>
  );
};

export default Navbar;
