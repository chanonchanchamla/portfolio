// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/sass/variables.scss'

// Vuetify
import { createVuetify } from 'vuetify'

const customThemeLight = {
  dark: false,
  colors: {
    background: '#F6F6F6',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#416D6D',
    'primary-darken-1': '#306060',
    secondary: '#82AFAF',
    'secondary-darken-1': '#4C7F85',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'clean-sky': '#E2EAEF',
    'light-sage-green': 'A5B297',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'customThemeLight',
    themes: {
      customThemeLight,
    },
  },
})
