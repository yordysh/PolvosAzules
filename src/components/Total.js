import React from 'react';
import accounting from 'accounting';
import { Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {getBasketTotal} from '../reducer';
import {useStateValue} from "../StateProvider";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>(
    {
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            
        },
        button: {
            marginTop: "2rem"
        }
    }
))
export const Total = () => {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className={classes.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "S/")}</h5>
            <div className={classes.button}>
                <Link to="checkout">
                <Button variant="contained" color="secondary">
                    Checkout
                </Button>
                </Link>
            </div>
        </div>
    )
}
