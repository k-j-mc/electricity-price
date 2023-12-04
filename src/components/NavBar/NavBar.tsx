import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <AppBar position="static" className="navBar">
            <Toolbar>
                <Typography variant="h5" style={{ color: "#FFFFFF" }}>
                    Electricity Prices
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
