import React from 'react'
import { Card, CardContent, CardMedia, CardActionArea, Button, Grid, Typography, Chip} from '@mui/material';
import Icon from '@mui/material/Icon';


const Icons = () => {
    return (
        <Icon sx={{ color:'#8C7B80', fontSize:"small", pl:1}}>circle</Icon>
    );
  }

function Projects() {

  return (
    <div>
        <Typography 
            variant="h3" component="h3" 
            sx={{
                color: '#856c63',
                mx:7,
                mt:7,
                letterSpacing: 2,
            }}
        >
            Projects
        </Typography>
        <Typography 
            variant="subtitle2" component="p" 
            sx={{
                color: '#E09B88',
                mt:2,
                letterSpacing: 2,
                fontStyle: 'italic',
            }}
        >
            imagine it, then create it.
        {/*  */}
        </Typography>
        <Grid container  spacing={3} sx={{ width: "80%", margin:"auto" }}>
            <Grid item  xs={12} sm={6} md={4} sx={{ margin:'auto'}}>
                <Card sx={{ maxWidth: 350, height: 350 , margin:'auto'}}>
                    <CardActionArea sx={{height: "100%" }}>
                        <CardMedia
                        component="img"
                        height="165"
                        image="./landing-cover.png"
                        alt="airbnb"
                        />
                        <CardContent>
                            
                            <div>
                                <Chip icon={<Icons />} label="UI/UX Design" size="small" variant="outlined" sx={{mx:0.5, fontWeight:500}} />
                                <Chip icon={<Icons />}  label="Figma" size="small" variant="outlined" sx={{mx:0.5, fontWeight:500}}/>
                            </div>
                            <Typography gutterBottom variant="p" component="div" sx={{color: '#8C7B80', fontSize: 20, pt:3, fontWeight: 500 }}>
                                Google Developer Student Club Landing Page
                            </Typography>
                            <Button variant="text" href="https://www.behance.net/gallery/142999005/Landing-Page" sx={{ my:2, color: '#E09B88' }}>Read More</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item  xs={12} sm={6} md={4} sx={{ margin:'auto'}}>
                <Card sx={{ maxWidth: 350, height: 350 , margin:'auto'}}>
                    <CardActionArea sx={{height: "100%" }}>
                        <CardMedia
                        component="img"
                        height="165"
                        image="./airbnb-remake.png"
                        alt="airbnb"
                        />
                        <CardContent>
                            
                            <div>
                                    <Chip icon={<Icons />} label="React.js" size="small" variant="outlined" sx={{mx:0.5, fontWeight:500}} />
                                    <Chip icon={<Icons />}  label="Bootstrap" size="small" variant="outlined" sx={{mx:0.5, fontWeight:500}}/>
                            </div>
                            <Typography gutterBottom variant="p" component="div" sx={{color: '#8C7B80', fontSize: 20, pt:3, fontWeight: 500 }}>
                                Airbnb Remake
                            </Typography>
                            <Button variant="text" href="https://yaphazel.github.io/airbnb-react-remake/" sx={{ my:2, color: '#E09B88' }}>Live Page</Button>
                            <Button variant="text" href="https://github.com/yaphazel/airbnb-react-remake" sx={{ my:2, color: '#E09B88' }}>Code</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 350, height: 350,  margin:'auto' }}>
                    <CardActionArea sx={{height: "100%" }}>
                        <CardMedia
                        component="img"
                        height="165"
                        image="./todolist-signin-login.png"
                        alt="todolist-sign-log"
                        />
                        <CardContent>
                        <div>
                            <Chip icon={<Icons />}  label="PHP" size="small" variant="outlined" sx={{mx:0.5, fontWeight:500}}/>
                            <Chip icon={<Icons />}  label="MySQL" size="small" variant="outlined" sx={{mx:0.5, fontWeight:500}} />
                            <Chip icon={<Icons />}  label="HTML &amp; CSS" size="small" variant="outlined" sx={{mx:0.5, fontWeight:500}} />
                        </div>
                        <Typography gutterBottom variant="p" component="div" sx={{ color: '#8C7B80', fontSize: 20, pt:3, fontWeight: 500 }}>
                            Signup/Login - To Do List 
                        </Typography>
                        <Button variant="text" href="https://github.com/yaphazel/todolist-php" sx={{ my:2, color: '#E09B88' }}>Code</Button>
                        
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 350, height: 350 , margin:'auto' }}>
                    <CardActionArea sx={{height: "100%" }}>
                        <CardMedia
                        component="img"
                        height="165"
                        image="./todolist.png"
                        alt="todolist"
                        />
                        <CardContent>
                        
                            <div>
                                <Chip icon={<Icons />}  label="JavaScript" size="small" variant="outlined" sx={{mx:0.5, fontWeight:500}} />
                                <Chip icon={<Icons />}  label="HTML &amp; CSS" size="small" variant="outlined" sx={{mx:0.5, fontWeight:500}} />
                            </div>
                            <Typography gutterBottom variant="p" component="div" sx={{color: '#8C7B80', fontSize: 20, pt:3, fontWeight: 500 }}>
                            To Do List
                            </Typography>
                            <Button variant="text" href="https://yaphazel.github.io/todoist-html/" sx={{ my:2, color: '#E09B88' }}>Live Page</Button>
                            <Button variant="text" href="https://github.com/yaphazel/todoist-html" sx={{ my:2, color: '#E09B88' }}>Code</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
        
    </div>
  )
}
export default Projects;