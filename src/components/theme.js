import { createTheme } from "@mui/material";


const theme = createTheme({
    typography:{
        h5:{
            fontFamily: '"Noto Serif", sans-serif;',
        },
        h3:{
            fontFamily: '"Noto Serif", sans-serif;',
        },
        subtitle1:{
            fontFamily: '"Noto Sans", sans-serif;',
        },
        subtitle2:{
            fontFamily: '"Noto Sans", sans-serif;',
        } 
        
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
                fontSize:'1rem',
                fontFamily: '"Noto Sans", sans-serif;',
                '&:hover': {
                    backgroundColor: "#FCF9F8",
                }
            },
          },
        },
      },
})

export default theme;