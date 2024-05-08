import { Paper, Typography } from "@mui/material";
import Hero from "./Hero";
import Links from "./Links";

const SocialCard = () => {
    return (  
        <Paper className="card">
            <Hero />

            <Typography mt={2} sx={{ fontSize: '14px' }}>"Front-end developer and avid reader."</Typography>
            <Links />
        </Paper>
    );
}
 
export default SocialCard;