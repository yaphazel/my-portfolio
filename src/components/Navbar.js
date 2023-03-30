import { React, useState } from "react";
import { AppBar, Box, Toolbar, Button, Typography, Grow } from "@mui/material";
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
                        style={{color:'#856C63'}}
                        >
                        Hazel
                    </Typography>
                    <Grow
                       in={show}
                       style={{ transformOrigin: "0 0 0"}} 
                       {...(show ? { timeout: 1000 } : {})}
                    >
                        <a href="#projects" style={{color:'#856C63', textDecoration:'none', fontSize:'18px', letterSpacing:2}}>Projects</a>
                    </Grow>
                    <Grow
                       in={show}
                    >
                       <a href="#creative" style={{color:'#856C63', textDecoration:'none', fontSize:'18px', letterSpacing:2, marginLeft:"20px"}}>Creative</a>
                    </Grow>
                    <Button
                        id="basic-button"
                        onClick={handleChange}
                        aria-controls={show ? true : false}
                        disableRipple
                    >
                        {show ?  <CloseIcon style={{color:'#856C63'}}/> : <MenuIcon style={{color:'#856C63'}}/>}
                       
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;