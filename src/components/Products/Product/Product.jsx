import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './styles.sass';

export default function Product({ product, OnAddToCart }) {

    const[checkClick, setClick] = useState();

    const handleClick = () => {
    setClick(!checkClick);
    }

    return (
        <Card className={'root'} style={{ height: '100%' }}>
            <CardMedia component={Link} to={"/products/" + String(product.id)} className={'CardMedia'} image={product.data_img} title={product.book_name}/>
            <CardContent className={'CardContent'}>
                <Typography variant="h6">{product.book_price} руб. </Typography>
                <Divider/>
                <Typography noWrap component={Link} to={"/products/" + String(product.id)} className={'link'} variant="h6" gutterBottom>{product.book_name}</Typography>
                <Typography variant="body2" color="textSecondary">{product.book_author}</Typography>
            </CardContent>
            <CardActions disableSpacing className={'CardActions'}>
                { checkClick ? (
                    <Button variant='outlined' color='secondary' component={Link} to={"/cart"}>
                        Добавлено
                    </Button>
                ) : (
                    <Button variant='contained' color='primary' onClick={() => {OnAddToCart(product.id); handleClick()}}>
                        В корзину
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
