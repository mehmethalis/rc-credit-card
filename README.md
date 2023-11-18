# RC Credit Card

## Installation

Use the package manager [pnpm / yarn / npm](https://pip.pypa.io/en/stable/) to install rc-credit-card.

```bash
pnpm install rc-credit-card
```

## Usage

[Demo with code](https://stackblitz.com/edit/stackblitz-starters-byqt2f?file=src%2FApp.tsx)

```ts
import * as React from 'react'
import { CreditCard } from 'rc-credit-card'

export default function App() {
  return (
    <CreditCard
      isFrontFace={isFrontFace}
      cardNumber={cardNo}
      name={name}
      validThru={valid}
      ccv={ccv}
      validThruLabel={'Expire Date'}
    />
  )
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Playground

```ts
$ pnpm dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
