import React from 'react'
import {  Paper, Grid, Typography, Box, IconButton} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons'



function Intro() {

    return (
        <div>
            <Grid container spacing={0} sx={{my:7, justifyContent:"center"}}>
                <Grid item xs={8} md={4} >
                    <Paper 
                        elevation={0}
                        sx={{
                            backgroundColor: '#FCF9F8',
                            py:{xs:1,md:10}
                        }} 
                    >   
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
                                src="./my-portfolio/profile.jpg"
                            />
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
                                src="./my-portfolio/profile-round.jpg"
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

                        <Typography variant="h3" component="h3" sx={{ letterSpacing: 4, color: '#8C7B80' }}>Hello,</Typography>
                        
                        <Typography variant="subtitle1" component="p" sx={{ pt:3,color: '#8C7B80' }} >
                        Lorem ipsum dolor amet ultricies et tempus. Magna sed etiam consequat, et lorem adipiscing sed euismod tempor.
                        </Typography>
                        <IconButton onClick={()=> window.open('https://www.linkedin.com/in/yaphpk-2101/')}aria-label="upload picture" component="span" sx={{ py:2, color: '#E09B88' }}>
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton onClick={()=> window.open('https://github.com/yaphazel')} aria-label="upload picture" component="span" sx={{ py:2, color: '#E09B88' }}>
                            <GitHubIcon/>
                        </IconButton>
                        <IconButton onClick={()=> window.open('https://www.behance.net/hazelyap')} aria-label="upload picture" component="span" sx={{ py:2, color: '#E09B88' }}>
                            <FontAwesomeIcon icon={faBehanceSquare} />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
  )
}
export default Intro;