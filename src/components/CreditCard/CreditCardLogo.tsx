import { memo, useEffect, useState } from 'react'
import styled from 'styled-components'

const CardLogoContainer = styled.span`
  display: flex;
  align-items: center;
`
const CardTitle = styled.h5`
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  ${({ theme }) => !theme.isFrontFace && `display: none;`}
`
const CardLogo = styled.img`
  width: 60px;
  margin-right: 10px;
  ${({ theme }) => !theme.isFrontFace && `display: none;`}
`
export const CreditCardLogo = memo(function Logo({ cardNo }: { cardNo: string }) {
  const getCardType = (cardNo: string): 'visa' | 'master' | 'amex' | 'disvocer' | null => {
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/
    const amexpRegEx = /^(?:3[47][0-9]{13})$/
    const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/

    if (visaRegEx.test(cardNo)) {
      return 'visa'
    } else if (mastercardRegEx.test(cardNo)) {
      return 'master'
    } else if (amexpRegEx.test(cardNo)) {
      return 'amex'
    } else if (discovRegEx.test(cardNo)) {
      return 'disvocer'
    }
    return null
  }

  const [cardType, setCardType] = useState<'visa' | 'master' | 'amex' | 'disvocer' | null>(
    getCardType(cardNo),
  )

  useEffect(() => {
    setCardType(getCardType(cardNo))
  }, [cardNo])
  return (
    <CardLogoContainer>
      {cardType !== 'amex' && (
        <CardLogo
          src={
            cardType === 'master'
              ? '/logo.png'
              : cardType === 'visa'
              ? '/visa.png'
              : cardType === 'disvocer'
              ? '/discover.png'
              : '/logo.png'
          }
        />
      )}

      <CardTitle>{cardType === 'amex' ? 'American Express' : cardType || 'master'} Card</CardTitle>
    </CardLogoContainer>
  )
})
