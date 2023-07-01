import { useState } from "react";
import { DrawerComponent } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { Box , Avatar, List, ListItemAvatar, ListItemText, ListItemButton } from "@mui/material";

const Drawer = () => {
    
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <>
      {drawerOpen && (
        <DrawerComponent
        >
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: "darkgray",
            }}
            onClick = {() => !setDrawerOpen()}
          />
        
        </DrawerComponent>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          
        </List>

      </Drawer>
      
    </>
  );
};

export default Drawer;
