import React from 'react'
import { Box, Card, CardContent, CardMedia, CardActionArea, Grid, Typography, Link, Paper} from '@mui/material';
import { borderRadius } from '@mui/system';
function Design() {
    return (
        <div id="creative" style={{marginBottom:"80px"}} >
        <Typography variant="h3" component="h3" >
            Creative
        </Typography>
        <Typography variant="subtitle1" component="p" >
            Everything you can imagine is real.
        </Typography>
        <Link href="https://www.behance.net/gallery/142999005/Landing-Page" underline="none">
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(project-uiux-google.webp)`,
                width: "56%",
                height: "450px",
                margin:"auto",
                marginTop:"30px",
                borderRadius: "5px"
            }}
        >
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.4)',
                borderRadius: "5px"
            }}
        />
      
       <Grid container>
            <Grid item xs={10} md={8}> 
                <Box
                    sx={{
                    position: 'relative',
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                    }}
                >

                    <Typography component="h4" variant="h4" sx={{ textAlign:"left", color:"white"}}>
                        Google Developer Student Club Landing Page
                    </Typography>
                    <Typography variant="body1" paragraph sx={{fontStyle:"italic", textAlign:"left", my:1}}>
                    <p>User interface design for Student Association</p>
                    </Typography>
                    <div style={{textAlign:'left', marginTop:"30px", color:"black", fontSize:"1.2rem"}}>
                        Continue Reading...
                    </div>
                    
                </Box>
            </Grid>
        </Grid> 
        </Paper> 
        </Link>  
    </div>
)}
export default Design;
