import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import useStyles from './styles';
import './styles.sass'

export default function Navbar({ booksCount }) {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar, 'appBar'} color="inherit">
                <Toolbar> 
                    <Typography variant="h6" className={'title'} color="inherit">
                        <img src={logo} alt="Bookshelf" height="25px" className={'image'}/>
                        <Link to='/' className={'link'}>Bookshelf</Link>
                    </Typography>
                    <div className={'grow'} />
                    <div className={'button'}>
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
