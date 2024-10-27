import React, { Component } from 'react'
import Menu from '@mui/icons-material/Menu';
import {AppBar, Toolbar, IconButton, Typography, backdropClasses, colors} from '@mui/material/';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export class FormUserDetails extends Component {
continue = e => {
    e.preventDefault();
    this.props.nextStep();
}

  render() {
    const {values, handleChange} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
            <AppBar sx={{mb: 4}}>
                <Toolbar>
                    <IconButton aria-label='app' color='inherit'>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6'>Enter User Details</Typography>
                </Toolbar>
            </AppBar>
            <TextField 
                    sx={{ mt: 10 }}
                    hintText='Enter Your First Name'
                    label='First Name'
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
            <br/>
            <TextField 
                    sx={{ mt: 2 }}
                    hintText='Enter Your Last Name'
                    label='Last Name'
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
            <br/>
            <TextField 
                    sx={{ mt: 2 }}
                    hintText='Enter Your Email'
                    label='Email'
                    size='Normal'
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
            <br/>
            <Button
                color='continue'
                variant='contained'
                label="continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            >
                continue
            </Button>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

const styles = {
    button: {
        margin: 15,
    }
}

const theme = createTheme({
  palette: {
    continue: {
      main: '#228B22',
      light: '#AAFF00',
      dark: '#023020',
      contrastText: '#ffffff',
    },
    back: {
      main: '#D22B2B',
      light: '#EE4B2B',
      dark: '#880808',
      contrastText: '#ffffff'
    }
  },
});

export default FormUserDetails