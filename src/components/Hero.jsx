import { Box, Typography } from "@mui/material";
import avatar from "../assets/images/avatar-jessica.jpeg"

const Hero = () => {
    return (  
        <Box className='hero'>
            <img src={avatar} alt='avatar' />
            <Typography variant='h3' fontWeight={'bold'} mt={1} >Jessica Randall</Typography>
            <Typography variant='h4'>London, United Kingdom</Typography>
        </Box>
    );
}
 
export default Hero;