import React, { Component } from 'react'
import Menu from '@mui/icons-material/Menu';
import {AppBar, Toolbar, IconButton, Typography, backdropClasses, colors} from '@mui/material/';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';

export class FormPersonalDetails extends Component {
continue = e => {
    e.preventDefault();
    this.props.nextStep();
}
back = e => {
    e.preventDefault();
    this.props.prevStep();
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
                    <Typography variant='h6'>Enter Personal Details</Typography>
                </Toolbar>
            </AppBar>
            <TextField 
                    sx={{ mt: 10 }}
                    hintText='Enter Your Occupation'
                    label='Occupation'
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                />
            <br/>
            <TextField 
                    sx={{ mt: 2 }}
                    hintText='Enter Your City'
                    label='City'
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                />
            <br/>
            <TextField 
                    sx={{ mt: 2 }}
                    hintText='Enter Your BIO'
                    label='BIO'
                    size='Normal'
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
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
            <Button
                color='back'
                variant='contained'
                label="back "
                primary={false}
                style={styles.button}
                onClick={this.back}
            >
                back
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
        contrastText: '#fffff'
      }
    },
  });

export default FormPersonalDetails