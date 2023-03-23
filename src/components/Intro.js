import { React, useState, useEffect } from 'react';
import {  Paper, Grid, Typography, Box, IconButton, styled} from '@mui/material';
import { keyframes } from "@mui/material";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons';


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
    const [delta, setDelta] = useState(250 - Math.random() * 100);

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
            <Grid container spacing={0} sx={{ justifyContent:'center', minHeight:"100vh"}} >
                <Grid item xs={8} md={4} sx={{ my:{ xs:0 ,md:'auto' }, display: { xs:"none", sm:"none", md:"block"} }}  >
                    <Paper 
                        elevation={0}
                        sx={{ backgroundColor: '#FCF9F8' }} 
                    >   
                        {/* <HolderPic scale={scale}> */}
                            <Box
                                component='img'
                                sx={{
                                    maxWidth: 360,
                                    width:'auto',
                                    height:'30vw',
                                    boxShadow: 2,
                                    backgroundColor: 'white',
                                    padding:2,
                                }}
                                alt="Rectangle profile picture"
                                src="./profile.webp"
                            />
                        {/* </HolderPic> */}
                    </Paper>
                </Grid>
                <Grid item xs={6} md={4} sx={{textAlign:{ xs:'center',  md:'left',},  my:{ md:'auto'}}}>
                    <Paper 
                        elevation={0} 
                        sx={{
                            backgroundColor: '#FCF9F8',
                            py:{md:5}
                        }}
                    >   
                            <Box
                                component="img"
                                sx={{
                                    maxWidth: 200,
                                    boxShadow: 2,
                                    borderRadius:50,
                                    backgroundColor: 'white',
                                    padding:1,
                                    display: { xs:"block", md:"none"},
                                    margin:'auto',
                                    marginTop: 12,
                                    marginBottom: 5
                                }}
                                alt="Round profile picture"
                                src="./profile-round.webp"
                            />
                        <Box sx={{ minHeight:"200px"}}>
                            <Typography variant="h4"  component="h3" sx={{ p:{md:1} }}>
                                Hello, 
                            </Typography>
                            <Typography variant="h4"  component="h3" sx={{ p:{md:1} }}>
                                I'm Hazel Yap.
                            </Typography>
                            <Typography variant="h4"  component="h3" sx={{ p:{md:1} }}>
                                {text}
                            </Typography>
                        </Box>
                        
                        <IconButton onClick={()=> window.open('https://www.linkedin.com/in/yaphpk-2101/')}aria-label="upload picture" component="span" sx={{ p:{md:1}, color: '#E09B88' }}>
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