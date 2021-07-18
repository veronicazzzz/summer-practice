import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid } from "@material-ui/core";
import { useState } from 'react';

import useStyles from './styles';

export default function CartItem({cartItemProduct, cartItemInfo, OnDeleteFromCart, OnAddToCart}) {

    const classes = useStyles();

    const[checkClick, setClick] = useState();

    const handleClick = () => {
    setClick(!checkClick);
    }

    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardMedia image={cartItemProduct.image} className={classes.media} />
                <CardContent className={classes.cardContent}>
                    <Typography variant='h4'> { cartItemProduct.name } </Typography>
                    <Typography variant='h5'> { cartItemProduct.prices * cartItemInfo.bookss_count } руб. </Typography>
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <div className={'buttons'}>
                        <Button type='button' size='small' onClick={() => OnDeleteFromCart(cartItemInfo.bookss_id)} > - </Button>
                        <Typography> { cartItemInfo.bookss_count } </Typography>
                        <Button type='button' size='small' onClick={() => OnAddToCart(cartItemInfo.bookss_id)} > + </Button>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}