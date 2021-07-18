import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { useState } from 'react';

export default function Cart( { cart, OnDeleteFromCart, booksCount, OnAddToCart } ) {

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>
            Корзина пуста! <Link to='/' className={classes.link}>Добавим что-нибудь? </Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart[3].map((cartItem, index) => (
                    <CartItem cartItemProduct={cartItem} cartItemInfo={cart[0]['products'][index]} OnDeleteFromCart={OnDeleteFromCart} OnAddToCart={OnAddToCart}/>
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <Typography variant='h4'>
                    Итог: {cart[1]} руб.
                </Typography>
                <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>
                    К оплате
                </Button>
            </div>
        </>
    )
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom>
                Корзина
            </Typography>
            { (booksCount === 0) ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}