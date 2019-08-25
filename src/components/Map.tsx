import * as React from 'react'
import { RestApi } from '../shared/RestApi'
import { PointModel } from '../shared/types'
import { RingLoaderWrapper } from '../shared/RingLoaderWrapper'

type State = {
  points: PointModel[] | undefined,
}

type Props = {
}

export class Map extends React.Component<Props, State> {

  public mapDiv = React.createRef()

  constructor(props: Props) {
    super(props)
    this.state = {
      points: undefined,
    }
  }

  async componentDidMount() {

    const mapDiv = document.getElementById('map')
    const tableDiv = document.createElement('div')
    tableDiv.className = 'table'
    tableDiv.style.left = '5%';
    tableDiv.style.top = '5%'
    if (mapDiv !== null) {
      mapDiv.appendChild(tableDiv)
    }

    let points: PointModel[]
    points = await RestApi.getPoint()
    this.setState({
      points: points,
    })
    window.setInterval(async () => {
      points = await RestApi.getPoint()
      const mapDiv = document.getElementById('map')
      if (mapDiv !== null) {
        mapDiv.innerHTML = ''
      }
      this.setState({
        points: points,
      })
    }, 5000)
  }

  render() {
    if (!this.state.points) {
      return ( <RingLoaderWrapper /> )
    }

    return (
      <div>
        {
          this.state.points.map((element: PointModel, index: number) => {
            const coordinateDiv = document.createElement('span')
            coordinateDiv.id = index.toString()
            coordinateDiv.className = 'circle fas fa-user-circle'
            coordinateDiv.style.backgroundColor = `rgb(${Math.random() * 255}, ${ Math.random() * 255 }, ${ Math.random() * 255 })`
            const mapDiv = document.getElementById('map')
            if (mapDiv !== null) {
              mapDiv.appendChild(coordinateDiv)
              coordinateDiv.style.left = element.x * 99 + '%'
              coordinateDiv.style.top = (mapDiv.clientHeight * element.y + 76).toString() + 'px'
            }
          })
        }
      </div>
    )
  }
}
