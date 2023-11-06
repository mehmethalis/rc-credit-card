import { useMemo } from 'react'

import { CreditCardTheme } from './CreditCard'

export const useCustomTheme = (theme?: CreditCardTheme) => {
  const customTheme = useMemo(() => {
    return {
      width: 400,
      height: 220,
      borderRadius: 15,
      background: [0, 0, 0, 0.8],
      backdropBlur: 25,
      shadow: true,
      border: true,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: [18, 19, 33, 0.1],
      color: '#fff',
      ...theme,
    }
  }, [theme])

  return { customTheme }
}
