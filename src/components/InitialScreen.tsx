import * as React from 'react'
type State = {
}

type Props = {
}

export class InitialScreen extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1 style={ { color: 'black', paddingTop: '20px', fontFamily: 'Hepta Slab' } } className='text-center'>Pypl Meter</h1>
      </div>
    )
  }
}
