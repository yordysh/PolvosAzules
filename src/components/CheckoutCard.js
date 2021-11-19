import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from "accounting";
import { makeStyles } from '@mui/styles';
import {useStateValue} from "../StateProvider";
import { actionTypes } from '../reducer';

const useStyles = makeStyles((theme) => (
    {
        CardActions:{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
        },
        cardRating:{
            display: "flex",
        }
    }
));

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;});
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function CheckoutCard({product : {id, name, productType, image, price, rating, description}}) {
   const classes = useStyles();
   const [{basket}, dispatch] = useStateValue();
//   const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id:id,
  })

  return (
    
    <Card sx={{ maxWidth: 345,marginTop: "8rem", }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <typografy 
          variant='h5'
          color="text.secondary"
          >
              {accounting.formatMoney(price, "S/")}
          </typografy>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardActions disableSpacing className={classes.CardActions}>
        <div className={classes.cardRating}>
        {Array(4)
        .fill()
        .map((_,i) => (
            <p>&#11088;</p>
        ))}
        </div>
        <IconButton fontSize="large" onClick={removeItem}>
        <DeleteIcon/>
        </IconButton>       
      </CardActions>
    </Card>
    
  );
}
