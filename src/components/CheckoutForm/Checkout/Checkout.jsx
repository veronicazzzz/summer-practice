import { Paper, Stepper, Step, StepLabel, Typography, Button, Link, Grid, FormControlLabel, Checkbox } from '@material-ui/core';

import { useState } from 'react';
import React from 'react';

import PersonalInfo from '../PersonalInfo';
import PaymentForm from '../PaymentForm';
import Review from '../Review';
import Delivery from '../Delivery';

import useStyles from './styles';

const steps = ['Персональная информация', 'Адрес', 'Детали заказа'];


function getStepContent(step, handleChangeFirstStage, handleChangeSecondStage, info) {
    switch (step) {
        case 0:
            return <PersonalInfo handleChange={handleChangeFirstStage}/>;
        case 1:
            return <Delivery handleChange={handleChangeSecondStage}/>
        case 2:
            return <Review info={info}/>;
        default:
            throw new Error('Unknown step');
    }
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateName = (name) => {
    const re = /^[А-Я][а-я]*([-][А-Я][а-я]*)?\s[А-Я][а-я]*\s[А-Я][а-я]*$/;
    return re.test(String(name));

}

const validatePhone = (phone) => {
    const re = /\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(String(phone).toLowerCase());
}

const validateCity = (city) => {
    const re = /^[А-Я][а-я]*([- ][А-Я][а-я]*)?$/;;
    return re.test(String(city));
}

const validateHouse = (house) => {
    const re = /^[\d]+\/[\d]+[\w]*$/;
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

export default function Checkout() {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState({
        'email': '',
        'phone': '',
        'name': '',
        'city': '',
        'street': '',
        'house': '',
        'appartments': '',
        'comment': '',
        'checkbox': true,
    })

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setValid(false);
    };
    
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleChangeFirstStage = (event) => {
        const val = event.target.value;
        const type = event.target.name;

        if (type == 'checkbox') {
            const prevState = value['checkbox'];
            setValue({...value, ['checkbox']: !prevState });
        }

        if (type === 'email') {
            if (validateEmail(val)) {
                setValue({...value, ['email']: val});
            }
            else {
                setValue({...value, ['email']: ''});
            }
        }

        if (type === 'phone') {
            if (validatePhone(val)) {
                setValue({...value, ['phone']: val});
            }
            else {
                setValue({...value, ['phone']: ''});
            }
        }

        if (type === 'surname') {
            console.log(value, val);
            if (validateSurname(val)) {
                setValue({...value, ['surname']: val});
            }
            else {
                setValue({...value, ['surname']: ''});
            }
        }

        if (type === 'name') {
            console.log(value, val);
            if (validateName(val)) {
                setValue({...value, ['name']: val});
            }
            else {
                setValue({...value, ['name']: ''});
            }
        }

        if (type === 'name') {
            console.log(value, val);
            if (validateName(val)) {
                setValue({...value, ['name']: val});
            }
            else {
                setValue({...value, ['name']: ''});
            }
        }

        if (!value['checkbox'] && (value['email'].length != 0) && (value['phone'].length != 0) && (value['name'].length != 0)) {
            console.log('Im here!');
            setValid(true);
        }
        else {
            setValid(false);
        }
    }

    const handleChangeSecondStage = (event) => {
        const val = event.target.value;
        const type = event.target.name;

        if (type == 'checkbox') {
            const prevState = value['checkbox'];
            setValue({...value, ['checkbox']: !prevState });
        }

        if (type === 'city') {
            if (validateCity(val)) {
                setValue({...value, ['city']: val});
            }
            else {
                setValue({...value, ['city']: ''});
            }
        }

        if (type === 'street') {
            if (validateStreet(val)) {
                setValue({...value, ['street']: val});
            }
            else {
                setValue({...value, ['street']: ''});
            }
        }

        if (type === 'house') {
            console.log(value, val);
            if (validateHouse(val)) {
                setValue({...value, ['house']: val});
            }
            else {
                setValue({...value, ['house']: ''});
            }
        }

        if (type === 'appartments') {
            if (validateAppartments(val)) {
                setValue({...value, ['appartments']: val});
            }
            else {
                setValue({...value, ['appartments']: ''});
            }
        }

        if (value['checkbox'] && (value['city'].length != 0 && value['street'].length != 0) && (value['house'].length != 0) && (value['appartments'].length != 0)) {
            setValid(true);
        }
        else {
            setValid(false);
        }

        console.log(value, val);
    }

    return (
        <>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Оплата
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
                        Спасибо за Ваш заказ!
                        </Typography>
                        <Typography variant="subtitle1">
                        Номер Вашего заказа: 
                        </Typography>
                    </React.Fragment>
                    ) : (
                    <React.Fragment>
                        {/* {getStepContent(activeStep, handleChangeFirstStage, handleChangeSecondStage, value, cart)} */}
                        <Grid item xs={12}>
                            <FormControlLabel
                                name='checkbox'
                                control={<Checkbox color="secondary" name="checkbox" />}
                                label={<Typography variant='h8'> Согласие на обработку персональных данных </Typography>}
                                onClick={e => handleChangeFirstStage(e)}
                                checked={value['checkbox']}
                            />
                        </Grid>
                        
                        {/* <div className={classes.buttons}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} className={classes.button}>
                                Назад
                                </Button>
                            )}
                            {
                                activeStep === 2 ? (
                                    <Button variant="contained" color="primary" disabled={!valid} className={classes.button} onClick={() => {handleSubmitInformation(value); handleNext()}}>
                                        Готово
                                    </Button>
                                ) : (
                                    <Button variant="contained" color="primary" disabled={!valid} className={classes.button} onClick={handleNext}>
                                        Далее
                                    </Button>
                                )
                            }
                        </div> */}
                    </React.Fragment>
                    )}
                </React.Fragment>
                </Paper>
            </main>
        </>
    )
}