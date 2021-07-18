import { TextField, Grid, Typography } from '@material-ui/core';



export default function Delivery({ handleChange }) {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Адрес доставки
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Город"
                        fullWidth
                        onChange={e => handleChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="street"
                        name="street"
                        label="Улица"
                        fullWidth
                        onChange={e => handleChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        required
                        id="house"
                        name="house"
                        label="Дом"
                        fullWidth
                        onChange={e => handleChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        required
                        id="appartments"
                        name="appartments"
                        label="Квартира"
                        fullWidth
                        onChange={e => handleChange(e)}
                    />
                </Grid>
            </Grid>
        </>
    )
}