import 'styled-components'

export type ThemeType = {
  'yellow-dark': string
  yellow: string
  'yellow-light': string
  'purple-dark': string
  purple: string
  'purple-light': string

  'base-title': string
  'base-subtitle': string
  'base-text': string
  'base-label': string
  'base-hover': string
  'base-button': string
  'base-input': string
  'base-card': string
  background: string
  white: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
