import React, { Component } from 'react'
import Menu from '@mui/icons-material/Menu';
import {AppBar, Toolbar, IconButton, Typography, backdropClasses, colors, ListItemText} from '@mui/material/';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export class Confirm extends Component {
continue = e => {
    e.preventDefault();
    // Proccess Form //
    this.props.nextStep();
}
back = e => {
    e.preventDefault();
    this.props.prevStep();
}

  render() {
    const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
            <AppBar sx={{mb: 4}}>
                <Toolbar>
                    <IconButton aria-label='app' color='inherit'>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6'>Confirm User Data </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <ListItemText 
                    primary="First Name"
                    secondary={firstName}
                /> 
                <ListItemText 
                    primary="Last Name"
                    secondary={firstName}
                /> 
                <ListItemText 
                    primary="Email"
                    secondary={email}
                /> 
                <ListItemText 
                    primary="Occupation"
                    secondary={occupation}
                /> 
                <ListItemText 
                    primary="City"
                    secondary={city}
                /> 
                <ListItemText 
                    primary="BIO"
                    secondary={bio}
                />
            </List>
            <Button
                color='continue'
                variant='contained'
                label="Confirm"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            >
                confirm
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
      contrastText: '#ffffff'
    }
  },
});

export default Confirm