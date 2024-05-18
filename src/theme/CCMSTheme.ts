import * as React from 'react';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const CCMSTheme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
      light: "#0D6A88",
      contrastText: "#FFFFFF",    
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },


});


export default CCMSTheme;