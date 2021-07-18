import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText, Grid, TextField, Card, CardContent } from '@material-ui/core';

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

export default function Review( { info, cart } ) {
  const classes = useStyles();

  const [comment, setValue] = useState({
    'comment': '',
  });

  const handleChange = (event) => {
    setValue({...comment, ['comment']: event.target.value})
    info = {...info, comment};
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Детали заказа
      </Typography>
      <List disablePadding>
        {cart[3].map((product, index) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{product.prices} x {cart[0]['products'][index]['bookss_count']}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {cart[1]} руб. 
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