/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'custom',
    themes: {
      light: {
        colors: {
          primary: '#B86E63',
          secondary: '#5CBBF6',
        },
      },
      custom: {
        colors: {
          black: '#000000',
          white: '#FFFFFF',
          primary: '#6567A6',
        }
      }
    },
  },
})
