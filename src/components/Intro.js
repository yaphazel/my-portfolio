import { React, useState, useEffect } from 'react';
import {  Paper, Grid, Typography, Box, IconButton, styled} from '@mui/material';

import { keyframes } from "@mui/material";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons'

// const expandText = keyframes`
//     0% {
//         letter-spacing: -0.5em;
//         opacity: 0;
//     }
//     40% {
//         opacity: 0.6;
//     }
//     100% {
//         opacity: 1;
//     }
// `;

// const Holder = styled(Typography)(({expand}) =>({
//     animation: expand && `${expandText} 1s linear both`
// }))

const scalePic = keyframes `

    0% {
    -webkit-transform: translateZ(80px);
            transform: translateZ(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }

`;

const HolderPic = styled(Typography)(({scale}) =>({
    animation: scale && `${scalePic} 1s linear both`
}))

function Intro() {
    //const [expand, setExpand] = useState(false);
    const [scale, setScale] = useState(false);

    useEffect (() => {
        setTimeout(() => {
            //setExpand(true);
            setScale(true);
        },250);
    },[]);

    const textRotate = ['Engineer','Web Developer','UI/UX Designer']
    const [text,setText] = useState('');
    const [loopNo,setLoopNo] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect (() =>{
        const interval = setInterval(() => {
            const no = loopNo % textRotate.length;
            const fullText = textRotate[no];
            const printText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

            setText(printText);


            if (!isDeleting && printText === fullText){
                setIsDeleting(true);
            }
            else if (isDeleting && printText === ''){
                setIsDeleting(false);
                setLoopNo(loopNo + 1);
            }

        },delta);
        return () => clearInterval(interval);
    },[text])

    return (
        <div >
            <Grid container spacing={0} sx={{my:7, justifyContent:"center"}} >
                <Grid item xs={8} md={4} >
                    <Paper 
                        elevation={0}
                        sx={{
                            backgroundColor: '#FCF9F8',
                            py:{xs:1,md:10}
                        }} 
                    >   
                        <HolderPic scale={scale}>
                            <Box
                                component="img"
                                sx={{
                                    maxWidth: 350,
                                    boxShadow: 2,
                                    backgroundColor: 'white',
                                    padding:2,
                                    display: { xs:"none", md:"block"}
                                }}
                                alt="Rectangle profile picture"
                                src="./profile.jpg"
                            />
                        </HolderPic>
                            <Box
                                component="img"
                                sx={{
                                    maxWidth: 180,
                                    boxShadow: 2,
                                    borderRadius:50,
                                    backgroundColor: 'white',
                                    padding:1,
                                    display: { xs:"block", md:"none"},
                                    margin:'auto'
                                }}
                                alt="Round profile picture"
                                src="./profile-round.jpg"
                            />
                        
                    </Paper>
                </Grid>
                <Grid item xs={6} md={4} sx={{textAlign: { md:'left', xs:'center'}, my:'auto'}}>
                    <Paper 
                        elevation={0} 
                        sx={{
                            backgroundColor: '#FCF9F8',
                            py:{xs:2,md:10}
                        }}
                    >
                        <Box sx={{ minHeight:"200px"}}>
                            <Typography 
                                variant="h3" 
                                component="h3" 
                                sx={{ letterSpacing: 4, color: '#856c63' }}>
                                Hello, 
                            </Typography>
                            <Typography 
                                variant="h3" 
                                component="h3" 
                                sx={{ letterSpacing: 4, color: '#856c63' }}>
                                I'm Hazel Yap,
                            </Typography>
                            <Typography 
                                variant="h3" 
                                component="h3" 
                                sx={{ letterSpacing: 4, color: '#856c63' }}>
                                {text}
                            </Typography>
                        </Box>
                        
                    
                        <Typography variant="subtitle1" component="p" sx={{ pt:3,color: '#8C7B80' }} >
                          
                        </Typography>
                        <IconButton onClick={()=> window.open('https://www.linkedin.com/in/yaphpk-2101/')}aria-label="upload picture" component="span" sx={{ p:1, color: '#E09B88' }}>
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton onClick={()=> window.open('https://github.com/yaphazel')} aria-label="upload picture" component="span" sx={{ p:1, color: '#E09B88' }}>
                            <GitHubIcon/>
                        </IconButton>
                        <IconButton onClick={()=> window.open('https://www.behance.net/hazelyap')} aria-label="upload picture" component="span" sx={{ p:1, color: '#E09B88' }}>
                            <FontAwesomeIcon icon={faBehanceSquare} />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
  )
}
export default Intro;