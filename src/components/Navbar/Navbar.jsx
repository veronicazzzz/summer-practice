import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import useStyles from './styles';

export default function Navbar({ booksCount }) {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar> 
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Bookshelf" height="25px" className={classes.image}/>
                        <Link to='/' className={classes.link}>Bookshelf</Link>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Содержимое корзины" color="inherit">
                            <Badge badgeContent={ String(booksCount) } color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
