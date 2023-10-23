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

  const masterLogo =
    '//images.ctfassets.net/zdg1aayn50br/7BjegDiWvxuk1Fr8qKCSKB/ad12d3daa71098ff635676a55cb8ad43/logo.png'

  const visaLogo =
    '//images.ctfassets.net/zdg1aayn50br/2jy88THnaK3SQ47KXkJgCC/91d9a4b4be4f8724337a9afe301a2c50/visa.png'

  const discoverLogo =
    '//images.ctfassets.net/zdg1aayn50br/1s9zW8eCJk4HM9WpHFrPQI/6bcaabaef522efa5e74f832b9538ad4e/discover.png'
  return (
    <CardLogoContainer>
      {cardType !== 'amex' && (
        <CardLogo
          src={
            cardType === 'master'
              ? masterLogo
              : cardType === 'visa'
              ? visaLogo
              : cardType === 'disvocer'
              ? discoverLogo
              : masterLogo
          }
        />
      )}

      <CardTitle>{cardType === 'amex' ? 'American Express' : cardType || 'master'} Card</CardTitle>
    </CardLogoContainer>
  )
})
