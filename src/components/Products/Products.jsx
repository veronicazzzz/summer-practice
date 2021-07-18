import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import Product from './Product/Product';
import useStyles from './styles';
import './styles.sass';

export default function Products({ products, OnAddToCart }) {
    
    const prodPerPage = 8;

    const classes = useStyles();

    const[value, setValue]=useState('');

    const[currentPage, setCurrentPage] = useState(1);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePagination = (event, value) => {
        setCurrentPage(value);
    };

    const filteredProducts = products.filter(product => {
        return product['book_name'].toLowerCase().includes(value.toLowerCase())
    });

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className={'nav'}>
                <form className={'searchform'}>
                    <TextField className={'seach_input'} placeholder="Поиск" variant="outlined" onChange={(event) => setValue(event.target.value)} size="small"/>
                </form>
                <div className={'links'}>
                    <Typography className={'link1'} component={Link} to={'/?category=1'} gutterBottom> Современные любовные романы </Typography>
                    <Typography className={'link2'} component={Link} to={'/?category=16'} gutterBottom> Триллеры </Typography>
                    <Typography className={'link3'} component={Link} to={'/?category=18'} gutterBottom> Биографии </Typography>
                </div>
            </div>
            <div className={'mainPage'}>
                <Container>
                    <Grid container justify="center" spacing={4}>
                        {filteredProducts.slice(currentPage * prodPerPage - prodPerPage, currentPage * prodPerPage).map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Product product = {product} OnAddToCart={() => OnAddToCart(product.id)} />
                            </Grid>
                         ))}
                    </Grid>
                    <Pagination className={'pagination'} shape="rounded" color="primary" count={Math.ceil(products.length / prodPerPage)} page={currentPage} onChange={handlePagination}/>
                </Container>
            </div>

        </main>
    );
}

