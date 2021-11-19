import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import products from '../product-data';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { boxSizing } from '@mui/system';
import CheckoutCard from './CheckoutCard';
import { Total } from './Total';
import {useStateValue} from "../StateProvider";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Products() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={3}>
//           {
//               products.map(
//                   product =>(
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Product key={product.id} product={product}/>
//                     </Grid>
//                   )
//               )
//           }
//       </Grid>
//     </Box>
//   );
// }
const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        paddingTop: "12rem",
    },
}));

const CheckoutPage = () => {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();

    function FormRow(){
        return (
            <React.Fragment>
                {
                    basket?.map((item) => (
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <CheckoutCard key={item.id} product={item} />
                        </Grid>
                    ))
                }
            </React.Fragment>
        );
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2} style={{marginTop: "-138px"}}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default CheckoutPage;