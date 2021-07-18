import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText, Grid, TextField, Card, CardContent } from '@material-ui/core';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review( { info } ) {
  const classes = useStyles();

  const [comment, setValue] = useState({
    'comment': '',
  });

  const handleChange = (event) => {
    setValue({...comment, ['comment']: event.target.value})
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Детали заказа
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Информация
          </Typography>
            <Card>
              <CardContent>
                <Typography gutterBottom> { info.name } </Typography>
                <Typography gutterBottom> { info.phone } </Typography>
                <Typography gutterBottom> { info.email } </Typography>
                <Typography gutterBottom> { info.city + ' ' + info.street + ' ' + info.house + ' ' + info.appartments } </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12}>
          <TextField
              id="comment"
              name="comment"
              label="Комментарий"
              fullWidth
              onChange={e => handleChange(e)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}