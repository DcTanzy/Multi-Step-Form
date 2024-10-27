import React, { Component } from 'react'
import Menu from '@mui/icons-material/Menu';
import {AppBar, Toolbar, IconButton, Typography, backdropClasses, colors, ListItemText} from '@mui/material/';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export class Success extends Component {
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
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
            <AppBar sx={{mb: 4}}>
                <Toolbar>
                    <IconButton aria-label='app' color='inherit'>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6'>Success</Typography>

                 </Toolbar>
            </AppBar>
            <Typography variant='h4' sx={{mt: 10}} fontWeight={'bold'}>Thank You For Your Submission</Typography>
            <Typography variant='p'>You Will Get An Email With Further Instructions</Typography>

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

export default Success