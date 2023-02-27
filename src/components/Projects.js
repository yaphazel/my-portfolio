import React from 'react'
import { Card, CardContent, CardMedia, CardActionArea, Button, Grid, Typography, Chip} from '@mui/material';
import Icon from '@mui/material/Icon';

const Icons = () => {
    return (
        <Icon sx={{ color:'#8C7B80', fontSize:"small", pl:1}}>circle</Icon>
    );
}

const projectList = [
    {
        img:"project-airbnb-remake.webp",
        alt:"airbnb",
        title:"Airbnb Remake",
        chips:["React.js","Bootstrap"],
        livepage:"",
        github:"https://github.com/yaphazel/airbnb-react-remake"
    },
    {
        img:"project-todolist-signin.webp",
        alt:"signin-page",
        title:"Signup & Login Page",
        chips:["PHP","MySQL", "HTML & CSS"],
        livepage:"",
        github:"https://github.com/yaphazel/todolist-php"
    },
    {
        img:"project-todolist.webp",
        alt:"todolist",
        title:"To-Do-List",
        chips:["JavaScript","HTML & CSS"],
        livepage:"https://yaphazel.github.io/todoist-html/",
        github:"https://github.com/yaphazel/todoist-html"
    },
    {
        img:"blog.webp",
        alt:"blog",
        title:"Blog",
        chips:["Node.js","EJS","JavaScript","HTML & CSS"],
        livepage:"",
        github:"https://github.com/yaphazel/blog-website"
    }
]

function Projects() {

  return (
    <div>
        <Typography variant="h3" component="h3"  sx={{ mt:7}}>
            Projects
        </Typography>
        <Typography variant="subtitle2" component="p" >
            imagine it, then create it.
        </Typography>
        <Grid container  spacing={3} sx={{ width: "80%", margin:"auto" }}>
            {projectList.map( (project) => (
                <Grid item  xs={12} md={6} lg={4} sx={{ margin:'auto'}}>
                    <Card sx={{ maxWidth: 350, height: 350 , margin:'auto'}}>
                        <CardActionArea sx={{height: "100%" }}>
                            <CardMedia
                            component="img"
                            height="165"
                            image={project.img}
                            alt={project.alt}
                            />
                            <CardContent>
                                <div>
                                    {project.chips.map((chip) => (
                                         <Chip  label={chip} size="small" variant="outlined" sx={{m:0.5, fontWeight:500}} />
                                    ))}
                                </div>
                                <Typography gutterBottom variant="p" component="div" >
                                    {project.title}
                                </Typography>
                                {project.livepage.length > 0 &&
                                     <Button variant="text" href={project.livepage} sx={{ my:1, color: '#E09B88' }}>Live Page</Button>  
                                }
                                <Button variant="text" href={project.github} sx={{ my:1, color: '#E09B88' }}>Source Code</Button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>                    
        {/* <Grid container  spacing={3} sx={{ width: "80%", margin:"auto" }}>
            <Grid item  xs={12} md={6} lg={4} sx={{ margin:'auto'}}>
                <Card sx={{ maxWidth: 350, height: 350 , margin:'auto'}}>
                    <CardActionArea sx={{height: "100%" }}>
            
                        <CardMedia
                        component="img"
                        height="165"
                        image="./landing-cover.png"
                        alt="ui-ux"
                        />
                        <CardContent>
                            
                            <div>
                                <Chip icon={<Icons />} label="UI/UX Design" size="small" variant="outlined" sx={{m:0.5, fontWeight:500}} />
                                <Chip icon={<Icons />}  label="Figma" size="small" variant="outlined" sx={{m:0.5, fontWeight:500}}/>
                            </div>
                            <Typography gutterBottom variant="p" component="div" >
                                Google Developer Student Club Landing Page
                            </Typography>
                            <Button variant="text" href="https://www.behance.net/gallery/142999005/Landing-Page" sx={{ my:1, color: '#E09B88' }}>Read More</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item  xs={12} md={6} lg={4} sx={{ margin:'auto'}}>
                <Card sx={{ maxWidth: 350, height: 350 , margin:'auto'}}>
                    <CardActionArea sx={{height: "100%"}}>
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
                            <Typography gutterBottom variant="p" component="div">
                                Airbnb Remake
                            </Typography>
                            <Button variant="text" href="https://yaphazel.github.io/airbnb-react-remake/" sx={{ my:1, color: '#E09B88' }}>Live Page</Button>
                            <Button variant="text" href="https://github.com/yaphazel/airbnb-react-remake" sx={{ my:1, color: '#E09B88' }}>Code</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
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
                        <Typography gutterBottom variant="p" component="div">
                            Signup/Login - To Do List 
                        </Typography>
                        <Button variant="text" href="https://github.com/yaphazel/todolist-php" sx={{ my:1, color: '#E09B88' }}>Code</Button>
                        
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
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
                            <Typography gutterBottom variant="p" component="div">
                            To Do List
                            </Typography>
                            <Button variant="text" href="https://yaphazel.github.io/todoist-html/" sx={{ my:2, color: '#E09B88' }}>Live Page</Button>
                            <Button variant="text" href="https://github.com/yaphazel/todoist-html" sx={{ my:2, color: '#E09B88' }}>Code</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid> */}
        
    </div>
  )
}
export default Projects;