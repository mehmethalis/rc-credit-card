import styled, { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import './flip-transation.css'
import { useFormatter } from './useFormatter'
import { CreditCardLogo } from './CreditCardLogo'
import { useCustomTheme } from './useCustomTheme'

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif; 
  }
`

const Card = styled.div`
  @import url("@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap')");
  height: 100%;
  width: 100%;
  padding: 25px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  backdrop-filter: blur(${({ theme }) => theme.backdropBlur}px);
  ${({ theme }) =>
    Array.isArray(theme.background)
      ? `background: rgba(${theme.background[0]},${theme.background[1]},${theme.background[2]},${theme.background[3]})`
      : `background : ${theme.background}`};
  ${({ theme }) =>
    theme.shadow
      ? ` box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;`
      : `box-shadow: none`};
  transition-duration: 0.4s;
  border-width: ${({ theme }) => theme.borderWidth}px;
  border-style: ${({ theme }) => (theme.border ? theme.borderStyle : 'none')};
  ${({ theme }) =>
    Array.isArray(theme.borderColor)
      ? `border-color: rgba(${theme.borderColor[0]},${theme.borderColor[1]},${theme.borderColor[2]},${theme.borderColor[3]})`
      : `border-color : ${theme.borderColor}`};
  color: ${({ theme }) => theme.color};
`

const CardHeader = styled.div`
  transition-duration: 0.4s;
  ${({ theme }) =>
    theme.isFrontFace &&
    `display: flex;
      align-items: center;
      justify-content: space-between;`}
`

const CardChip = styled.img`
  width: 50px;
  ${({ theme }) => !theme.isFrontFace && `display: none;`}
`

const CardBody = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const CardBodySection = styled.div``
const CardLabel = styled.h6`
  font-size: 10px;
  font-weight: 400;
  ${({ theme }) => !theme.isFrontFace && `display: none;`}
`
const CardNumber = styled.h5`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1px;
  ${({ theme }) => !theme.isFrontFace && `display: none;`}
`

const CardAuthor = styled.h5`
  margin-top: 20px;
  font-weight: 400;
  text-transform: capitalize;
  ${({ theme }) => !theme.isFrontFace && `display: none;`}
`
const CardValidLabel = styled.h6`
  font-size: 10px;
  font-weight: 400;
  ${({ theme }) => !theme.isFrontFace && `display: none;`}
`
const CardValidDate = styled.h5`
  font-size: 16px;
  font-weight: 400;
  ${({ theme }) => !theme.isFrontFace && `display: none;`}
`
const CardBackHeaderExplanation = styled.h6`
  margin-top: 0;
  font-size: 8px;
  transform: rotateY(180deg);
  ${({ theme }) => theme.isFrontFace && `display: none;`}
`

const CardBackBodyExplanation = styled.h5`
  font-size: 8px;
  margin-top: 10px;
  transform: rotateY(180deg);
  ${({ theme }) => theme.isFrontFace && `display: none;`}
`

const CardSignature = styled.div`
  transform: rotateY(180deg);
  ${({ theme }) => theme.isFrontFace && `display: none;`}
`

const CardSignatureNo = styled.i`
  color: #000;
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 4px;
  background-color: #fff;
  margin-right: -30px;
  margin-left: 5px;
  z-index: -1;
  transform: rotateY(-180deg);
  ${({ theme }) => theme.isFrontFace && `display: none;`}
`

const MagneticStrip = styled.span`
  position: absolute;
  top: 50px;
  left: 0;
  height: 45px;
  width: 100%;
  background: #000;
  ${({ theme }) => theme.isFrontFace && `display: none;`}
`
const Signature = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  height: 40px;
  width: 85%;
  border-radius: 6px;
  ${({ theme }) => theme.isFrontFace && `display: none;`}
`

export type CreditCardTheme = {
  borderRadius?: number
  background?: [number, number, number, number] | string
  backdropBlur?: number
  shadow?: boolean
  border?: boolean
  borderWidth?: number
  borderStyle?: 'solid' | 'dotted' | 'dashed' | 'inset'
  borderColor?: [number, number, number, number] | string
  color?: string
} | null

export type CreditCardProps = {
  isFrontFace: boolean
  name: string
  validThru: string
  cardNumber: string
  ccv: string
  backHeaderExplanation?: string
  backBodyExplanation?: string
  validThruLabel?: string
  theme?: CreditCardTheme
}

export const CreditCard = (props: CreditCardProps) => {
  const {
    isFrontFace = true,
    name = '',
    validThru = '',
    cardNumber = '',
    ccv = '',
    theme,
    validThruLabel = 'Valid Thru',
    backHeaderExplanation = 'For customer service call +977 4343 3433 or email at mastercard@gmail.com',
    backBodyExplanation = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maiores sed doloremque nesciunt neque beatae voluptatibus doloribus. Libero et quis magni magnam',
  } = props

  const { cardNo, validDate, CCV } = useFormatter({
    rawCardNo: cardNumber,
    rawCCV: ccv,
    rawValidThru: validThru,
  })

  const { customTheme } = useCustomTheme(theme)
  return (
    <CSSTransition in={isFrontFace} timeout={0} classNames="flip">
      <ThemeProvider theme={{ isFrontFace, ...customTheme }}>
        <GlobalStyle />
        <Card>
          <CardHeader>
            <CreditCardLogo cardNo={cardNumber} />
            <CardBackHeaderExplanation>{backHeaderExplanation}</CardBackHeaderExplanation>
            <CardChip src={'/chip.png'} />
          </CardHeader>
          <CardBody>
            <MagneticStrip />
            <CardBodySection>
              <CardLabel>Card Number</CardLabel>
              <CardNumber>{cardNo}</CardNumber>
              <CardAuthor>{name}</CardAuthor>
            </CardBodySection>
            <CardBodySection>
              <Signature>
                <CardSignature>CCV</CardSignature>
                <CardSignatureNo> {CCV}</CardSignatureNo>
              </Signature>
              <CardBackBodyExplanation>{backBodyExplanation}</CardBackBodyExplanation>
              <CardValidLabel>{validThruLabel}</CardValidLabel>
              <CardValidDate>{validDate}</CardValidDate>
            </CardBodySection>
          </CardBody>
        </Card>
      </ThemeProvider>
    </CSSTransition>
  )
}
