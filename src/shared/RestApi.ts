import { PointModel } from './types'

export class RestApi {

  public static async getPoint() {
    const response = await fetch('http://10.22.136.99:5000/Snapshot/')
    if (response.status === 200) {
      const res = await response.json()
      console.log(res)
      return res
    } else {
      throw new Error('No jalo la api del ali sama')
    }
  }

  public static async getMockPoint(): Promise<PointModel[]> {
    return (
      [
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
        {
          x: 0.20 + Math.random() * 0.60,
          y: 0.20 + Math.random() * 0.60,
        },
      ]
    )
  }
}
