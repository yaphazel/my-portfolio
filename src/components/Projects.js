import { React} from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Button, Grid, Typography, Chip} from '@mui/material';

import Icon from '@mui/material/Icon';

const Icons = () => {
    return (
        <Icon sx={{ color:'#E09B88', fontSize:"small", pl:1}}>circle</Icon>
    );
}


const projectList = [
    {
        img:"project-todolist-signin.webp",
        alt:"signin-page",
        title:"Signup & Login Page",
        chips:["PHP","MySQL", "HTML & CSS"],
        livepage:"",
        github:"https://github.com/yaphazel/todolist-php"
    },
    {
        img:"project-template-img.webp",
        alt:"console-game",
        title:"School Project - Console Game",
        chips:["C++"],
        livepage:"",
        github:"https://github.com/yaphazel/Group4Engg1340Comp2113CourseProject"
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
    },
    {
        img:"project-airbnb-remake.webp",
        alt:"airbnb",
        title:"Airbnb Remake",
        chips:["React.js","Bootstrap"],
        livepage:"",
        github:"https://github.com/yaphazel/airbnb-react-remake"
    }
]

function Projects() {


    return (
    <div id="projects">
        <Typography variant="h3" component="h3"  sx={{ mt:7}}>
            Projects
        </Typography>
        <Typography variant="subtitle2" component="p" >
            imagine it, then create it.
        </Typography>
        <Grid container  spacing={3} sx={{ width: "80%", margin:"auto" }}>
            {projectList.map( (project) => (
                <Grid item  xs={12} md={6} lg={4} sx={{ margin:'auto', mb:4}}>
                    <Card sx={{ maxWidth: 320, height: 320 , margin:'auto'}}>
                        <CardActionArea sx={{height: "100%" }}>
                            <CardMedia
                            component="img"
                            height="170"
                            image={project.img}
                            alt={project.alt}
                            sx={{mt:-2}}
                            />
                            <CardContent>
                                <div>
                                    {project.chips.map((chip) => (
                                         <Chip icon={<Icons/>} label={chip} size="small" variant="outlined" sx={{m:0.2, fontWeight:500, fontSize:"11px"}} />
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
        
    </div>
  )
}
export default Projects;