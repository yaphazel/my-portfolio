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
                color: '#8C7B80',
                mx:7,
                mt:7,
                letterSpacing: 2,
            }}
        >
            Projects
        </Typography>
        <Typography 
            variant="subtitle1" component="p" 
            sx={{
                color: '#8C7B80',
                mt:2,
                fontStyle: 'italic',
            }}
        >
            imagine it, then create it.
        </Typography>
        <Grid container  spacing={3} sx={{my:8}}>
            <Grid item  xs={12} sm={6} md={4} sx={{ margin:'auto'}}>
                <Card sx={{ maxWidth: 345, height: 320 , margin:'auto'}}>
                    <CardActionArea sx={{height: 320 }}>
                        <CardMedia
                        component="img"
                        height="160"
                        image="./airbnb-remake.png"
                        alt="airbnb"
                        />
                        <CardContent>
                            
                            <div>
                                    <Chip icon={<Icons />} label="React.js" size="small" variant="outlined" sx={{mx:0.5}} />
                                    <Chip icon={<Icons />}  label="Bootstrap" size="small" variant="outlined" sx={{mx:0.5}}/>
                            </div>
                            <Typography gutterBottom variant="p" component="div" sx={{ fontSize: 22, pt:3, fontWeight: 500 }}>
                                Airbnb Remake
                            </Typography>
                            <Button variant="text" href="https://yaphazel.github.io/airbnb-react-remake/" sx={{ my:2, color: '#E09B88' }}>Webpage</Button>
                            <Button variant="text" href="https://github.com/yaphazel/airbnb-react-remake" sx={{ my:2, color: '#E09B88' }}>Code</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, height: 320,  margin:'auto' }}>
                    <CardActionArea sx={{height: 320 }}>
                        <CardMedia
                        component="img"
                        height="160"
                        image="./todolist-signin-login.png"
                        alt="todolist-sign-log"
                        />
                        <CardContent>
                        <div>
                            <Chip icon={<Icons />}  label="PHP" size="small" variant="outlined" sx={{mx:0.5}}/>
                            <Chip icon={<Icons />}  label="MySQL" size="small" variant="outlined" sx={{mx:0.5}} />
                            <Chip icon={<Icons />}  label="HTML &amp; CSS" size="small" variant="outlined" sx={{mx:0.5}} />
                        </div>
                        <Typography gutterBottom variant="p" component="div" sx={{ fontSize: 22, pt:3, fontWeight: 500 }}>
                            Signup/Login - To Do List 
                        </Typography>
                        <Button variant="text" href="https://github.com/yaphazel/todolist-php" sx={{ my:2, color: '#E09B88' }}>Code</Button>
                        
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, height: 320 , margin:'auto' }}>
                    <CardActionArea sx={{height: 320 }}>
                        <CardMedia
                        component="img"
                        height="160"
                        image="/todolist.png"
                        alt="todolist"
                        />
                        <CardContent>
                        
                            <div>
                                <Chip icon={<Icons />}  label="JavaScript" size="small" variant="outlined" sx={{mx:0.5}} />
                                <Chip icon={<Icons />}  label="HTML &amp; CSS" size="small" variant="outlined" sx={{mx:0.5}} />
                            </div>
                            <Typography gutterBottom variant="p" component="div" sx={{ fontSize: 22, pt:3, fontWeight: 500 }}>
                            To Do List
                            </Typography>
                            <Button variant="text" href="https://yaphazel.github.io/todoist-html/" sx={{ my:2, color: '#E09B88' }}>Webpage</Button>
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