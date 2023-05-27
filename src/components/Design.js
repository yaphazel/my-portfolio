import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Grid, Link, Paper} from '@mui/material';

const itemData = [
    {
        name:'Google Developer Student Club Landing Page',
        description:'User interface design for google developer student association',
        link:'https://www.behance.net/gallery/142999005/Landing-Page',
        image:'url(project-uiux-google.webp)',
        button:'Read More'
    },
    {
        name:'Booking App Prototype',
        description:'Booking system that allow its partner organizations to reserve equipment',
        link:'https://www.figma.com/proto/Hg9Y3AvwAvabNbZPQQ4sPN/Software-Engineering---Group-CF?node-id=2-3&starting-point-node-id=2%3A3&scaling=scale-down',
        image:'url(booking-app-prototype.webp)',
        button:'Try Me'
    }

]



function Design() {
    return (
        <div id="uiux" style={{marginBottom:"80px"}} >
        <Typography variant="h3" component="h3" >
            UI/UX
        </Typography>
        <Typography variant="subtitle1" component="p" >
            Everything you can imagine is real.
        </Typography>
        {itemData.map((item) => (
        <Link href={item.link} underline="none">
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage:`${item.image}`,
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
                borderRadius: "5px",
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
                    {item.name}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{fontStyle:"italic", textAlign:"left", my:1}}>
                    <p>{item.description}</p>
                    </Typography>
                    <div style={{textAlign:'left', padding:'5px', marginTop:"30px", color:"#E09B88", backgroundColor:"white", fontSize:"0.9rem", border:'#E09B88 solid 2px', borderRadius:'7px', width:'100px', textAlign:'center'}}>
                        {item.button} &#8702;
                    </div>
                    
                </Box>
            </Grid>
        </Grid> 
        </Paper> 
        </Link>
        ))}  
    </div>
)}
export default Design;
