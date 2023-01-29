import { React } from "react";
import { AppBar, Box, Toolbar, Button, Typography, Grow } from "@mui/material";
import { useState } from "react";
import MenuIcon  from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
    const [show,setShow] = useState(false);

    const handleChange = () =>{
        setShow((prev) => !prev);
    };

    return(
        <Box >
            <AppBar style={{ background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <Typography 
                        variant="h5" 
                        align="left" 
                        sx={{flexGrow:1}} 
                        style={{color:'Black'}}
                        >
                        Hazel
                    </Typography>
                    
                    <Grow
                       in={show}
                       style={{ transformOrigin: "0 0 0"}} 
                       {...(show ? { timeout: 1000 } : {})}
                    >
                        <Button style={{color:'#c9c9c9'}}>Project</Button>
                    </Grow>
                    <Grow
                       in={show}
                    >
                        <Button style={{color:'#c9c9c9'}}>Skill</Button>
                    </Grow>
                    <Button
                        id="basic-button"
                        onClick={handleChange}
                        aria-controls={show ? true : false}
                        disableRipple
                    >
                        {show ?  <CloseIcon style={{color:'black'}}/> : <MenuIcon style={{color:'black'}}/>}
                       
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;