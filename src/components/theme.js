import { createTheme } from "@mui/material";


const theme = createTheme({
    typography:{
        h5:{
            fontFamily: '"Playfair Display", sans-serif',
            fontWeight: 500,
        },
        h4:{ // Intro Titles
            fontFamily: '"Playfair Display", sans-serif',
            color: '#856C63',
            fontSize: '2.2rem',
            '@media (min-width:600px)': {
                fontSize: '2.4rem',
            },
            
        },
        h3:{ // Section Titles
            fontFamily: '"Playfair Display", sans-serif',
            fontWeight: 500,
            color: '#856C63',
            letterSpacing: 2,
            fontSize: '2.1rem',
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        subtitle1:{ // Section sub-title
            fontFamily: '"Source Sans Pro", sans-serif;',
            color: '#E09B88',
            fontSize: '1.3rem',
            marginTop: 7
        },
        p:{  // Project title
            color: '#856C63', 
            fontWeight: 500,
            fontSize: '1.3rem',
            '@media (min-width:900px)': {
                fontSize: '1.6rem',
            },
            fontFamily: '"Playfair Display", sans-serif',
        }, 
        body2:{
            color: 'grey', 
            marginTop:8, 
            fontWeight: 500,
        } 
        
    },

    components: {
        MuiButton: {
          styleOverrides: {
            root: {
                fontSize:'0.7rem',
                '@media (min-width:1200px)': {
                    fontSize: '0.8rem',
                },
                fontFamily: '"Source Sans Pro", sans-serif;',
                '&:hover': {
                    backgroundColor: "#FCF9F8",
                }

            },
          },
        }
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