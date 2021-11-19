import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from "accounting";

import { actionTypes } from '../reducer';
import {useStateValue} from "../StateProvider";

// const useStyles =makeStyles((theme) => ({
//     root: {
//         maxWidth: 345,
//     },
//     action: {
//         marginTop: "1rem",
//     },
//     media: {
//         height: 0,
//         paddingTop: "56.5%",
//     },
//     expand: {
//         transform: "rotate(0deg)",
//         marginLeft: "auto",
//         transition: theme.transition.create("transform", {
//             duration: theme.transition.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: "rotate(180deg)",
//     },
// }));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({product : {id, name, productType, image, price, rating, description}}) {
    
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
          id,
          name,
          productType,
          image,
          price,
          rating,
          description,
      }
    })
  }
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to shopping cart" onClick={addToBasket}>
        <AddShoppingCartIcon />
        </IconButton>
        {Array(4)
        .fill()
        .map((_,i) => (
            <p>&#11088;</p>
        ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <typografy paragraph>{description}</typografy>
        </CardContent>
      </Collapse>
    </Card>
    
  );
}
