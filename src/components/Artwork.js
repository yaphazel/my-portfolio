import React from "react";
import { Typography, Box, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';



const itemData = [
    {
        img:"./IMG-0410.jpg",
        title:"fish"
    },
    {
        img:"./IMG-0412.jpg",
        title:"cup"
    },
    {
        img:"./IMG-0411.jpg",
        title:"leaf"
    },
    {
        img:"./Magarita-01.png",
        title:"magarita"
    },
    {
        img:"./Strawberry-01.png",
        title:"strawberry"
    },

]

function Artwork() {
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
           Design
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
            design is thinking made visual
        </Typography>
        <Box sx={{ width: "80%", margin:"auto" }}>
                <ImageList sx={{m:2}} variant="masonry" cols={2} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem sx={{width:150}}key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar position="below" title={item.author} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    </div>
    )
}


export default Artwork;
