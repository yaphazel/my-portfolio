import { createTheme } from "@mui/material";


const theme = createTheme({
    typography:{
        h5:{
            fontFamily: '"Playfair Display", sans-serif',
            fontWeight: 500,
        },
        h4:{
            fontFamily: '"Playfair Display", sans-serif',
            color: '#856c63',
        },
        h3:{
            fontFamily: '"Playfair Display", sans-serif',
            fontWeight: 500,
            color: '#856c63',
            letterSpacing: 2,
            fontSize: '1.5rem',
            '@media (min-width:600px)': {
            fontSize: '2.5rem',
            },
        },
        subtitle1:{
            fontFamily: '"Noto Sans", sans-serif;',
        },
        subtitle2:{
            fontFamily: '"Noto Sans", sans-serif;',
            color: '#E09B88',
            marginTop:10, 
            letterSpacing: 2,
            fontStyle: 'italic',
        } ,
        p:{
            color: '#8C7B80', 
            marginTop:8, 
            fontWeight: 500,
            fontSize: '1.1rem',
            '@media (min-width:600px)': {
            fontSize: '1.3rem',
            },
            
        } 
        
    },

    components: {
        MuiButton: {
          styleOverrides: {
            root: {
                fontSize:'0.6rem',
                '@media (min-width:1200px)': {
                    fontSize: '0.8rem',
                },
                fontFamily: '"Noto Sans", sans-serif;',
                '&:hover': {
                    backgroundColor: "#FCF9F8",
                }

            },
          },
        },
      },
})
// theme.typography.h3 = {
//     fontSize: '1.2rem',
//     '@media (min-width:600px)': {
//       fontSize: '1.5rem',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '2.4rem',
//     },
// };
export default theme;