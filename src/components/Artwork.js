import React from "react";
import { Typography, Box, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';


const itemData = [
    {
        img:"./art-fish.jpg",
        title:"fish"
    },
    {
        img:"./art-cup.jpg",
        title:"cup"
    },
    {
        img:"./art-leaf.jpg",
        title:"leaf"
    },
    {
        img:"./art-magarita.png",
        title:"magarita"
    },
    {
        img:"./art-strawberry.png",
        title:"strawberry"
    },

]

function Artwork() {
    return (
    <div>
        <Typography 
            variant="h3" component="h3" 
            sx={{ mt:7}}
        >
            Design
        </Typography>
        <Typography variant="subtitle2" component="p" >
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
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    </div>
    )
}


export default Artwork;
