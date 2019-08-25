import * as React from 'react'
import { Header } from './Header'
import { Map } from './Map'

type State = {
}

type Props = {
}

export class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <div id='map' />
        <Map />
      </div>
    )
  }
}
