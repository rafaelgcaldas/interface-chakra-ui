import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "400": "#47585B",
      "300": "#999999",
      "200": "#DADADA",
      "100": "rgba(153, 153, 153, 0.5)",
    },
    yellow: {
      "900": "#FFBA08",
      "400": "#rgba(255, 186, 8, 0.5)",
    },
    blue: {
      "100": "#F5F8FA"
    }
  },
  styles: {
    global: {
      body: {
        bg: '#DADADA',
        color: 'gray.400'
      }
    }
  }
})