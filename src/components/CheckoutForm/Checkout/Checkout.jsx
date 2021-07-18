import { Paper, Stepper, Step, StepLabel, Typography, Button, CssBaseline, Link, Grid, FormControlLabel, Checkbox } from '@material-ui/core';

import { useState } from 'react';
import React from 'react';

import PersonalInfo from '../PersonalInfo';
import Review from '../Review';
import Delivery from '../Delivery';

import useStyles from './styles';
import './styles.sass';

const steps = ['Персональная информация', 'Адрес доставки', 'Детали заказа'];

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateName = (name) => {
    const re = /^[А-Я][а-я]*/;
    return re.test(String(name));

}

const validateSurname = (surname) => {
    const re = /^[А-Я][а-я]*([-][А-Я][а-я]*)?/;
    return re.test(String(surname));

}

const validatePatronymic = (patronymic) => {
    const re = /^[А-Я][а-я]*/;
    return re.test(String(patronymic));

}

const validatePhone = (phone) => {
    const re = /(\d){11}$/;
    return re.test(String(phone).toLowerCase());
}

const validateCity = (city) => {
    const re = /^[А-Я][а-я]*(([- ])?[А-Я][а-я]*)?$/;;
    return re.test(String(city));
}

const validateHouse = (house) => {
    const re = /^[\d]+[\w]{0,1}$/;
    return re.test(String(house));
}

const validateAppartments = (apps) => {
    const re = /[\d]+$/;
    return re.test(String(apps));
}

const validateStreet = (street) => {
    const re = /[А-Я][а-я]+$/;
    return re.test(String(street));
}

function getStepContent(step, setValid, setValue, info, cart) {
    switch (step) {
        case 0:
            return <PersonalInfo setValid={setValid} setValue={setValue} info={info}/>;
        case 1:
            return <Delivery setValid={setValid} setValue={setValue} info={info}/>
        case 2:
            return <Review info={info} cart={cart}/>;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout({ cart, handleSubmitInformation }) {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState({
        'email': '',
        'phone': '',
        'name': '',
        'surname': '',
        'patronymic': '',
        'city': '',
        'street': '',
        'house': '',
        'appartments': '',
        'comment': '',
        'checkbox': true,
    })

    const check = () => {
        if (activeStep === 0) {
            console.log(validateEmail(value['email']) && validatePhone(value['phone']) && validateName(value['name']) && validateSurname(value['surname']) && validatePatronymic(value['patronymic']))
            setValid(validateEmail(value['email']) && validatePhone(value['phone']) && validateName(value['name']) && validateSurname(value['surname']) && validatePatronymic(value['patronymic']));
        }
        else {
            setValid(validateCity(value['city']) && validateStreet(value['street']) && validateHouse(value['house']) && validateAppartments(value['appartments']));
        }
    }
    
    const handle = () => {
        setValue({...value, ['checkbox']: !value['checkbox']})
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);

        if (activeStep < 2) {
            setValid(false);
        }
    };
    
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };    

    return (
        <>
            <CssBaseline />
            <main className={'layout', [classes.layout].join(' ')}>
                <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Заказ
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                        Спасибо за ваш заказ!
                        </Typography>
                        <Typography variant="subtitle1">
                        Номер вашего заказа #{Math.floor(Math.random() * 10000)}
                        </Typography>
                    </React.Fragment>
                    ) : (
                    <React.Fragment>
                        {getStepContent(activeStep, setValid, setValue, value, cart)}
                        <div className={'buttons'}>
                        { activeStep === 2 ? (
                                <>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            name='checkbox'
                                            control={<Checkbox color="secondary" name="checkbox" />}
                                            label={<Typography variant='h8'> Согласие на обработку персональных данных </Typography>}
                                            onClick={handle}
                                            checked={value['checkbox']}
                                        />
                                    </Grid>
                                    <Button onClick={handleBack} className={classes.button}>
                                        Назад
                                    </Button>
                                    <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={!value['checkbox']}
                                            className={classes.button}
                                            onClick={() => {handleSubmitInformation(value); handleNext()}}
                                        >
                                            Готово
                                    </Button>
                                </>
                            ) : ( 
                                    <>
                                        <Grid item xs={12}>
                                            <Button onClick={check} className={classes.button}>
                                                Проверить
                                            </Button>
                                        </Grid>
                                        <Button onClick={handleBack} className={classes.button} disabled={activeStep === 0}>
                                            Назад
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={!valid}
                                            className={classes.button}
                                            onClick={handleNext}
                                        >
                                            Далее
                                        </Button>
                                    </> 
                                )
                            }
                        </div>
                    </React.Fragment>
                    )}
                </React.Fragment>
                </Paper>
            </main>
        </>
    )
}

