import { TextField, Grid, Typography, Input } from '@material-ui/core';
import { useState } from 'react';


export default function PersonalInfo({ setValue, info }) {
    const value = info;

    const handleChangeFirstStage = (event) => {
        const val = event.target.value;
        const type = event.target.name;

        if (value['valid']) {
            setValue({...value, ['valid']: true});
            return;
        }

        if (type === 'email') {
            setValue({...value, ['email']: val});
        }

        if (type === 'phone') {
            setValue({...value, ['phone']: val});
        }

        if (type === 'name') {
            var newVal = val.replace(' ', '').replace(' ', '');

            setValue({...value, ['name']: newVal});
        }

        if (type === 'surname') {
            var newVal = val.replace(' ', '').replace(' ', '');

            setValue({...value, ['surname']: newVal});
        }

        if (type === 'patronymic') {
            var newVal = val.replace(' ', '').replace(' ', '');

            setValue({...value, ['patronymic']: newVal});
        }
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Персональная информация
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="surname"
                        name="surname"
                        label="Фамилия"
                        fullWidth
                        onChange={e => handleChangeFirstStage(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Имя"
                        fullWidth
                        onChange={e => handleChangeFirstStage(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="patronymic"
                        name="patronymic"
                        label="Отчество"
                        fullWidth
                        onChange={e => handleChangeFirstStage(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Телефон"
                        fullWidth
                        onChange={e => handleChangeFirstStage(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        onChange={e => handleChangeFirstStage(e)}
                    />
                </Grid>
            </Grid>
        </>
    )
}
