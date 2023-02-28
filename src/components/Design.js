import React from 'react'
import { Card, CardContent, CardMedia, CardActionArea, Grid, Typography, Link} from '@mui/material';
function Design() {
    return (
        <div >
        <Grid container sx={{ width: "80%", minHeight:"400px", marginLeft:"auto" }}>
        <Grid item xs={10} sx={{ height:"500px"}}>
            <CardActionArea component="a" href="#" >
                <Card sx={{ display: 'flex', height:"350px" }}  >
                    <CardContent>
                        <Typography component="h2" variant="h5" sx={{ textAlign:"left"}}>
                            Google Developer Student Club Landing Page
                        </Typography>
                        <Typography variant="subtitle1" paragraph sx={{fontStyle:"italic", textAlign:"left"}}>
                        <p>User interface design for Student Association</p>
                        
                        <Link href="https://www.behance.net/gallery/142999005/Landing-Page" underline="none">
                         Continue Reading...
                        </Link>
                        </Typography>
                       
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: "60%", display: { xs: 'none', sm: 'block' } }}
                        image="https://resources.workable.com/wp-content/uploads/2017/08/shutterstock_703336915.jpg"
                        alt=""
                    />
                </Card>
            </CardActionArea>
            </Grid>
        </Grid>    
    </div>
)}
export default Design;
