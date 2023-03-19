const ALERT_MESSAGE = {
    loginIncorrect: {
        alert: true,
        alertTitle: 'Warnming',
        alertMessage: `Username or/and password incorrect`,
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: 'login',
    },
    missingInformation: {
        alert: true,
        alertTitle: 'Warnming',
        alertMessage: `Add a username and password`,
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: 'login',
    },
    loginSuccesful:{
        alert: true,
        alertTitle: 'Welcome...',
        alertMessage: 'Login successful!',
        alertIcon: 'success',
        showConfirmButton: false,
        timer: 800,
        ruta: 'health',
    }
}

export default ALERT_MESSAGE;
