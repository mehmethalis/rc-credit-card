import { useMemo } from 'react'
import { CreditCardTheme } from './CreditCard'

export const useCustomTheme = (theme?: CreditCardTheme) => {
  const customTheme = useMemo(() => {
    return {
      borderRadius: 15,
      background: [255, 255, 255, 0.1],
      backdropBlur: 25,
      shadow: true,
      border: true,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: [255, 255, 255, 0.1],
      color: '#fff',
      ...theme,
    }
  }, [theme])

  return { customTheme }
}
