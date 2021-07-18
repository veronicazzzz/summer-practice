import { TextField, Grid, Typography } from '@material-ui/core';
import { useState } from 'react';


export default function Delivery({ setValue, info }) {
    const value = info;

    const handleChangeSecondStage = (event) => {
        const val = event.target.value;
        const type = event.target.name;

        if (type === 'city') {
            setValue({...value, ['city']: val});
        }

        if (type === 'street') {
            setValue({...value, ['street']: val});
        }

        if (type === 'house') {
            setValue({...value, ['house']: val});
        }

        if (type === 'appartments') {
            setValue({...value, ['appartments']: val});
        }
    }


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
                        onChange={e => handleChangeSecondStage(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="street"
                        name="street"
                        label="Улица"
                        fullWidth
                        onChange={e => handleChangeSecondStage(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        required
                        id="house"
                        name="house"
                        label="Дом"
                        fullWidth
                        onChange={e => handleChangeSecondStage(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        required
                        id="appartments"
                        name="appartments"
                        label="Квартира"
                        fullWidth
                        onChange={e => handleChangeSecondStage(e)}
                    />
                </Grid>
            </Grid>
        </>
    )
}