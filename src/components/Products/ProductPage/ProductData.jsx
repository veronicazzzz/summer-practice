import { Box, Divider, Grid, Typography, Button } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ProductData( { product, OnAddToCart } ) {

    const[checkClick, setClick] = useState();

    const handleClick = () => {
    setClick(!checkClick);
    }

    return (
        <Grid container direction='column' style={{height: '100%'}}>
            <Typography variant='body2' gutterBottom color="textSecondary"> { product.category } </Typography>
            <Divider />
            <Box mt={3}>
                <Typography variant='h5' gutterBottom > { product.book_name } </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom> { product.book_author } </Typography>
                <Typography variant='h5' gutterBottom> { product.book_price } руб. </Typography>
            </Box>
            <Box mt={6}>
                { checkClick ? (
                    <Button variant='outlined' color='secondary' component={Link} to={'/cart'}>
                        Добавлено
                    </Button>
                ) : (
                    <Button variant='contained' color='primary' onClick={() => {OnAddToCart(product.id); handleClick()}}>
                        В корзину
                    </Button>
                )}
            </Box>
        </Grid>
    )
}