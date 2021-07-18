import { TextField, Grid, Typography, Input } from '@material-ui/core';

export default function PersonalInfo({ handleChange }) {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Персональная информация
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Имя"
                        fullWidth
                        onChange={e => handleChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="surname"
                        name="surname"
                        label="Фамилия"
                        fullWidth
                        onChange={e => handleChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="patronymic"
                        name="patronymic"
                        label="Отчество"
                        fullWidth
                        onChange={e => handleChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Телефон"
                        fullWidth
                        onChange={e => handleChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        onChange={e => handleChange(e)}
                    />
                </Grid>
            </Grid>
        </>
    )
}