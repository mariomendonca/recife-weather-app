import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../components/Header'

export default function Forecast() {
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    const getForecast = async () => {
      const res = await axios.get(`https://apiadvisor.climatempo.com.br/api/v1/forecast/locale/7140/hours/72?token=4ecb103c5e39b1d458e3d4ea8463c0b5`)
      setForecast([res])
    }
    getForecast()

  }, [])
  console.log(forecast[0])
  return (
    <>
    <Header />
    <div className='container'>
      <div className="box">
        <h1>hello world</h1>
        <h1>hello world</h1>
      </div>
    </div>
    </>
  )
}
