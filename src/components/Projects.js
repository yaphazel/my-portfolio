import { React} from 'react';
import { Card, CardContent, CardMedia, CardHeader, CardActionArea, Button, Box, Grid, Typography, Chip} from '@mui/material';

import Icon from '@mui/material/Icon';

const Icons = () => {
    return (
        <Icon sx={{ color:'#61876E', fontSize:"small", pl:1}}>circle</Icon>
    );
}


const projectList = [
    {
        img:"project-signin.webp",
        alt:"signin-page",
        title:"Signup & Login Page",
        description:"Simple user registration and login system using PHP and MySQL.",
        chips:["PHP","MySQL", "HTML & CSS"],
        livepage:"",
        github:"https://github.com/yaphazel/login-system-php"
    },
    
    {
        img:"project-todolist.webp",
        alt:"todolist",
        title:"To-Do-List (Static)",
        description:"Static to-do-list website that allows users to create and manage a list of tasks that they need to complete.",
        chips:["JavaScript","HTML & CSS"],
        livepage:"https://yaphazel.github.io/todoist-html/",
        github:"https://github.com/yaphazel/todoist-html"
    },

    {
        img:"project-todolist.webp",
        alt:"todolist",
        title:"To-Do-List",
        description:"Converted To-do-list linked to MongoDB database.",
        chips:["Express/Node.js","MongoDB/Mongoose","JavaScript","EJS"],
        livepage:"",
        github:"https://github.com/yaphazel/todoist"
    },
    {
        img:"blog.webp",
        alt:"blog",
        title:"Blog",
        description:"Blog Website where users can create, manage, and publish blog posts.",
        chips:["Node.js","EJS","JavaScript","HTML & CSS"],
        livepage:"",
        github:"https://github.com/yaphazel/blog-website"
    },
    {
        img:"project-airbnb-remake.webp",
        alt:"airbnb",
        title:"Airbnb Remake",
        description:"Airbnb website cloned for practice.",
        chips:["React.js","Bootstrap"],
        livepage:"",
        github:"https://github.com/yaphazel/airbnb-react-remake"
    },
    {
        img:"project-template-img.webp",
        alt:"console-game",
        title:"Console Game",
        description:"Horror-themed text-based choice game, where the player is presented with several choices at each stage of the game.",
        chips:["C++"],
        livepage:"",
        github:"https://github.com/yaphazel/Group4Engg1340Comp2113CourseProject"
    },
    
]

function Projects() {


    return (
    <div id="projects">
        <Typography variant="h3" component="h3"  >
            Projects
        </Typography>
        <Typography variant="subtitle1" component="p" >
            Imagine It, Then Create It.
        </Typography>
        <Grid container spacing={3}  sx={{ width: "80%", margin:"auto", minHeight:"100vh", mb:5}}>
            {projectList.map( (project) => (
                <Grid item  xs={12} md={6} lg={4} sx={{ margin:'auto'}}>
                    <Card sx={{ maxWidth: 340, height:{xs: 280 ,md:390}, display: { xs:"none", md:"block"}, margin:'auto'}}>
                        <CardHeader
                        title={project.title}
                        titleTypographyProps={{variant:'p'}}
                        sx={{
                            textAlign: {xs:'left', md:'center'},
                            color: '#856C63', 
                            fontWeight: 500,
                        }}
                        />
                        <CardMedia
                                component="img"
                                height="170"
                                image={project.img}
                                alt={project.alt}
                                sx={{display: { xs:"none", md:"block"}}}
                        />
                        <CardContent sx={{ display:{ xs:"none", md:"block"} }}>
                            <Box sx={{ textAlign: {xs:'left', md:'center'} }}>
                                {project.chips.map((chip) => (
                                    <Chip icon={<Icons/>} label={chip} size="small" variant="filled" sx={{m:0.2, fontWeight:500, fontSize:"12px"}} />
                                ))}
                            </Box>
                            <Box sx={{textAlign: {xs:'left', md:'center'}}}>
                                {project.livepage.length > 0 &&
                                    <Button variant="text" href={project.livepage} sx={{ m:1, color: '#61876E',border:'0.5px solid #61876E' }}>Live Page</Button>  
                                }
                                <Button variant="text" href={project.github} sx={{ mx:1, my:3.5 ,color: '#61876E', border:'0.5px solid #61876E' }}>Source Code</Button>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 340, height: 260, display: { xs:"block", md:"none"}, margin:'auto'}}>
                        
                        <CardActionArea sx={{height: "100%" }}>
                            <CardContent sx={{pt:0}}>
                                <Typography gutterBottom variant="p" component="div"  sx={{ textAlign:'left', ml:1 }}>
                                    {project.title}
                                </Typography>
                                <Typography gutterBottom variant="body2" component="div" sx={{ textAlign:{xs:'left'}, ml:1 }}>
                                    {project.description}
                                </Typography>
                                
                                <Box sx={{ textAlign:'left', mt:1, mb:2.5 }}>
                                    {project.livepage.length > 0 &&
                                        <Button variant="text" href={project.livepage} sx={{  color: '#61876E', textAlign:'left' }}>Live Page</Button>  
                                    }
                                    <Button variant="text" href={project.github} sx={{ color: '#61876E', display:'inline-block' }}>Source Code</Button>
                                </Box>
                                <Box sx={{textAlign: {xs:'left', md:'center'}}}>
                                
                                    {project.chips.map((chip) => (
                                         <Chip icon={<Icons/>} label={chip} size="small" variant="filled" sx={{m:0.2, fontWeight:500, fontSize:"12px"}} />
                                    ))}
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>                    
        
    </div>
  )
}
export default Projects;