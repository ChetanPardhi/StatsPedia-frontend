import { styled , Box, Toolbar, List, AppBar, Drawer} from "@mui/material";
import HeaderBackground  from '../../images/bannerBackground.png'
import Logo from '../../images/StatsPedia_blackBackgroundLogo.png'

export const HeaderDiv = styled(Box)(({theme}) => ({
    backgroundImage : `url(${ HeaderBackground })`,
    height: '500px',
    backgroundSize : 'cover',
    backgroundRepeat : "no-repeat",    
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
}))


export const NavbarDesktop = styled(AppBar)(() => ({
  marginTop : 4,
  background : "transparent",
}))

export const HeaderComponent = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent : "center",
  alignItems : "center",
}))

export const HeaderPages = styled(List)(() => ({
  flexGrow : 3,
  display : "flex",
  color : "white",
  justifyContent : "center",
  alignItems : "center"
}))

export const CompanyLogoContainer = styled(Box)(() => ({

  display : "flex",
  flexGrow : 1,
  // left : 0,
  justifyContent : "center",
  alignItems : "center",

  maxWidth : "150px"
}))

export const CompanyLogo = styled("img")(() => ({
  src : `url(${Logo})`,
  display : "absolute",
  height : "50px",
  flexGrow : 1,
  width : "100px"
}))


export const DrawerComponent = styled(Drawer)(() => ({
  position : 'absolute',
  top : 10,
  zIndex : 1999,
  left : 0,
  // width : '400px'
}))


