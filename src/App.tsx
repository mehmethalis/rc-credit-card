import { useState } from 'react'
import styled from 'styled-components'

import { CreditCard } from './components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
`

const Container = styled.div`
  height: 220px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  color: #fff;
`

function App() {
  const [isFrontFace, setIsFrontFace] = useState(true)
  const [cardNo, setCardNo] = useState('')
  const [name, setName] = useState('')
  const [valid, setValid] = useState('')
  const [ccv, setCCv] = useState('')

  return (
    <Section>
      <Container>
        <span>Card No</span>
        <input
          value={cardNo}
          placeholder="card no"
          onChange={(e) => setCardNo(e.target.value)}
        />
        <span>Name</span>
        <input
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <span>Valid</span>
        <input
          value={valid}
          placeholder="valid"
          onChange={(e) => setValid(e.target.value)}
        />
        <span>CCV</span>
        <input
          value={ccv}
          placeholder="ccv"
          onChange={(e) => setCCv(e.target.value)}
          onFocus={() => setIsFrontFace(false)}
          onBlur={() => setIsFrontFace(true)}
        />

        <button
          style={{ marginTop: '20px', padding: 3 }}
          onClick={() => setIsFrontFace(!isFrontFace)}
        >
          Flip Card
        </button>
      </Container>
      <Container>
        <CreditCard
          isFrontFace={isFrontFace}
          cardNumber={cardNo}
          name={name}
          validThru={valid}
          ccv={ccv}
          validThruLabel={'Expire Date'}
        />
      </Container>
    </Section>
  )
}

export default App
