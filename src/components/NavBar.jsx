import { AppBar, Toolbar, Typography, Button } from '@mui/material';

//Old style ES5
/* function NavBar() {
  return (
    <div>NavBar</div>
  )
} */

//ES6
const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ReactFEU23
                </Typography>
                <Button color="inherit">Hem</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
