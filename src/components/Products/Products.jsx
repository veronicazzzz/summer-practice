import React from 'react';
import { Grid, FormControl, Checkbox, FormControlLabel, FormGroup, Card, CardActions, Container, Menu, MenuItem, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import Product from './Product/Product';
import useStyles from './styles';

export default function Products({ products, OnAddToCart }) {
    
    const prodPerPage = 8;

    const classes = useStyles();

    const[value, setValue]=useState('');

    const[currentPage, setCurrentPage] = useState(1);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePagination = (event, value) => {
        setCurrentPage(value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const filteredProducts = products.filter(product => {
        return product['book_name'].toLowerCase().includes(value.toLowerCase())
    });

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className={classes.nav}>
                <form className={classes.searchform}>
                    <TextField className="seach_input" placeholder="Поиск" variant="outlined" onChange={(event) => setValue(event.target.value)} size="small"/>
                </form>
                <div>
                <Button aria-controls="sort" aria-haspopup="true" color="secondary" onClick={handleClick}>
                    Категории
                </Button>
                <Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem containerElement={<Link to="/?category=1" />}>Современные любовные романы</MenuItem>
                    <MenuItem containerElement={<Link to="/?category=2" />} onClick={()=>{handleClose()}}>Категория 2</MenuItem>
                    <MenuItem containerElement={<Link to="/?category=3" />} onClick={()=>{handleClose()}}>Категория 3</MenuItem>
                </Menu>
                </div>
            </div>
            <div className={classes.mainPage}>
                <Container>
                    <Grid container justify="center" spacing={4}>
                        {filteredProducts.slice(currentPage * prodPerPage - prodPerPage, currentPage * prodPerPage).map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Product product = {product} OnAddToCart={() => OnAddToCart(product.id)} />
                            </Grid>
                         ))}
                    </Grid>
                    <Pagination className={classes.pagination} shape="rounded" color="primary" count={Math.ceil(products.length / prodPerPage)} page={currentPage} onChange={handlePagination}/>
                </Container>
            </div>

        </main>
    );
}

