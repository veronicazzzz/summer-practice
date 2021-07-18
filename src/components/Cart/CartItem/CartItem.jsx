import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid } from "@material-ui/core";
import { useState } from 'react';

import './styles.sass';

export default function CartItem({cartItemProduct, cartItemInfo, OnDeleteFromCart, OnAddToCart}) {

    const[checkClick, setClick] = useState();

    const handleClick = () => {
    setClick(!checkClick);
    }

    return (
        <Grid item xs={12} sm={4}>
            <Card className={'cart'}>
                <CardMedia image={cartItemProduct.image} className={'media'} />
                <CardContent className={'cardContent'}>
                    <Typography noWrap variant='h6'> { cartItemProduct.name } </Typography>
                    <Typography variant='h6'> { cartItemProduct.prices * cartItemInfo.bookss_count } руб. </Typography>
                </CardContent>
                <CardActions className={'cardAction'}>
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