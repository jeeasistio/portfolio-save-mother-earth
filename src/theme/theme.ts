import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      light: '#DEB97C',
      main: '#D7A55B',
      dark: '#C19451',
      contrastText: '#f3f3f3'
    },
    secondary: {
      light: '#666666',
      main: '#444444',
      dark: '#222222',
      contrastText: '#DEB97C'
    },
    common: {
      white: '#f3f3f3',
      black: '#444444'
    },
    text: {
      primary: '#444444',
      secondary: '#5a5a5a'
    }
  },
  typography: {
    allVariants: {
      color: '#fff'
    },
    fontSize: 16,
    fontFamily: '"Raleway", "Lato"',
    h1: {
      fontFamily: 'Raleway'
    },
    h2: {
      fontFamily: 'Raleway'
    },
    h3: {
      fontFamily: 'Raleway'
    },
    h4: {
      fontFamily: 'Raleway'
    },
    h5: {
      fontFamily: 'Raleway'
    },
    h6: {
      fontFamily: 'Lato'
    },
    subtitle1: {
      fontFamily: 'Lato'
    },
    subtitle2: {
      fontFamily: 'Lato'
    },
    body1: {
      fontFamily: 'Lato'
    },
    body2: {
      fontFamily: 'Lato'
    },
    button: {
      fontFamily: 'Lato'
    },
    caption: {
      fontFamily: 'Lato'
    },
    overline: {
      fontFamily: 'Lato'
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
