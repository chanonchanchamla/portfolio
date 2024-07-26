// Styles
// import '@mdi/font/css/materialdesignicons.css'
// eslint-disable-next-line
import '@fortawesome/fontawesome-free/css/all.css'
import '@/sass/variables.scss'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

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
    'light-sage-green': '#A5B297',
    'green-dried-herb': '#556246',
    'light-green-teal': '#82AFAF',
    'light-olive': '#808000',
    'light-brown': '#B77332',
    'dark-olive': '#5F6F52',
  },
}

export default createVuetify({
  theme: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
    defaultTheme: 'customThemeLight',
    themes: {
      customThemeLight,
    },
  },
})
