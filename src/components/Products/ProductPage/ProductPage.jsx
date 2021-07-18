import { Grid } from '@material-ui/core';
import ProductData from './ProductData';
import Image from "material-ui-image";

import useStyles from './styles';

export default function ProductPage( { product, cart, OnAddToCart } ) {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <Grid container justifyContent='center'>
                <Grid className={classes.image} item sm={4} key={1}>
                    <img src={product.data_img} />
                </Grid>
                <Grid item sm={6}>
                    <ProductData product={product} cart={cart} OnAddToCart={OnAddToCart}/>
                </Grid>
            </Grid>
        </div>
    )
}


