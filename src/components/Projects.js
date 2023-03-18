import { React} from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Button, Box, Grid, Typography, Chip} from '@mui/material';

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
        description:"Static to-do-list website that allows users to create and manage a list of tasks that they need to complete",
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
        description:"Airbnb website cloned for practice",
        chips:["React.js","Bootstrap"],
        livepage:"",
        github:"https://github.com/yaphazel/airbnb-react-remake"
    },
    {
        img:"project-template-img.webp",
        alt:"console-game",
        title:"School Project - Console Game",
        description:"Horror-themed text-based choice game, where the player is presented with several choices at each stage of the game.",
        chips:["C++"],
        livepage:"",
        github:"https://github.com/yaphazel/Group4Engg1340Comp2113CourseProject"
    },
    
]

function Projects() {


    return (
    <div id="projects">
        <Typography variant="h3" component="h3"  sx={{ mt:7}}>
            Projects
        </Typography>
        <Typography variant="subtitle1" component="p" >
            imagine it, then create it.
        </Typography>
        <Grid container  spacing={3} sx={{ width: "80%", margin:"auto" }}>
            {projectList.map( (project) => (
                <Grid item  xs={12} md={6} lg={4} sx={{ margin:'auto', mb:4}}>
                    <Card sx={{ maxWidth: 320, height:{xs: 250 ,md:320} , margin:'auto'}}>
                        <CardActionArea sx={{height: "100%" }}>
                            <CardMedia
                            component="img"
                            height="170"
                            image={project.img}
                            alt={project.alt}
                            
                            sx={{mt:-2, display: { xs:"none", sm:"none", md:"block"}}}
                            />
                            <CardContent>
                                
                                <Typography gutterBottom variant="p" component="div"  sx={{textAlign:{xs:'left',md:'center'}, marginLeft:{xs:1, md:0}}}>
                                    {project.title}
                                </Typography>
                                <Typography gutterBottom variant="body2" component="div" sx={{display:{xs:"block", md:"none"},textAlign:{xs:'left'}, marginLeft:{xs:1, md:0}}}>
                                    {project.description}
                                </Typography>
                                
                                <Box sx={{textAlign: {xs:'left', md:'center'}}}>
                                    {project.livepage.length > 0 &&
                                        <Button variant="text" href={project.livepage} sx={{ my:0.8, color: '#61876E',textAlign:{xs:'left', md:'center'} }}>Live Page</Button>  
                                    }
                                    <Button variant="text" href={project.github} sx={{ my:1, color: '#61876E', display:'inline-block' }}>Source Code</Button>
                                </Box>
                                <Box sx={{textAlign: {xs:'left', md:'center'}}}>
                                
                                    {project.chips.map((chip) => (
                                         <Chip icon={<Icons/>} label={chip} size="small" variant="outlined" sx={{m:0.2, fontWeight:500, fontSize:"11px"}} />
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