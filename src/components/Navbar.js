import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/polvosazules.png";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import {useStateValue} from "../StateProvider";
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import { useHistory } from 'react-router-dom';


const theme = createTheme({

      spacing: 2,

    
});


// const theme = createTheme({
//     spacing: 2,
   
// });


const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        marginBottom: "7em",
    },
    appBar: {
        backgroundColor: "white",
        boxShadow: "none",
    },
    grow: {
        flexGrow: 1,
    },
    button : {
        marginLeft: theme,
        
    },
    image: {
        marginRight: "10px",
        height:"4rem",
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [{basket,user}, dispatch] = useStateValue();
    const history = useHistory();

    const handleAuth = () => {
      if(user){
        auth.signOut();
        dispatch({
          type: actionTypes.EMPTY_BASKET,
          basket: [],
        });
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
        history.push("/")
      }
    }

  return (
    <ThemeProvider  theme={theme} className={classes.root}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor: "whitesmoke"}}>
        <Toolbar>
          <Link to="/">
            <IconButton
            size="large"
            edge="start"
            // color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
          >
            <img src={logo} className={classes.image}/>
          </IconButton>
          </Link>
          
          <div className={classes.grow} />
          <Typography variant="h6" component="p"  color="black" marginRight="15px">
            Hello {user ? user.email : "Guest"}
          </Typography>
         
              {/* <Button color="inherit"> 
                  Sign In
                  </Button> */}
                  <div className={classes.button} >
                    <Link to="/signin">
                      <Button  onClick={handleAuth} variant="outlined" style={{color: "black"}}>
                            <strong>{user ? "Sign Out" : "Sign In"}</strong>
                      </Button>
                    </Link>
                    <Link to="Checkout-page">
                      <IconButton aria-label="show cart items" color="inherit">
                    <Badge badgeContent={basket?.length} color="secondary">
                      <LocalGroceryStoreIcon fontSize="large" color="primary"/>
                    </Badge>
                  </IconButton>
                    </Link>
                  </div>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>  
  
  );
}
