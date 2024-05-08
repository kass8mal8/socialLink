import { List, ListItem, ListItemText } from "@mui/material";

const Links = () => {

    return (  
        <List sx={{ textAlign: 'center', height: '100%' }}>
            <ListItemText className='link' primary="Github" />
            <ListItemText className='link' primary="Frontend Mentor" />
            <ListItemText className='link' primary="LinkedIn" />
            <ListItemText className='link' primary="Twitter" />
            <ListItemText className='link' primary="Instagram" />
        </List>
    );
}
 
export default Links;