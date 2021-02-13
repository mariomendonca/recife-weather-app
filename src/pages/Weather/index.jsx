import axios from 'axios'
import { useState, useEffect } from 'react'

import './styles.css'
import r2 from '../../assets/200px/2r.png'
export default function Weather() {
  const [clima, setClima] = useState([])

  useEffect(() => {
    const buscandoTempo = async () => {

      const res = await axios.get(`http://apiadvisor.climatempo.com.br/api/v1/weather/locale/7140/current?token=4ecb103c5e39b1d458e3d4ea8463c0b5`)
      setClima([res.data])
    }
    buscandoTempo()
  }, [])

  console.log(clima)


  return (
    <>
      <div className='container'>
        {clima.map(info => (
          <div className='box'>
            <div id="header">
              <div className="header">
                <h1>{info.name}, {info.state}</h1>
                <h1>{info.data.date}</h1>
              </div>
            </div>
            <div className="box-content">
              <div className="box-infos">
                <div className="box-info">
                  <p>Temperatura: {info.data.temperature}°</p>
                  {/* <img src={foto} alt='icon'/> */}
                  {/* <img src={`../../assets/200px/${info.data.icon}.png`} alt={info.data.icon}/> */}
                  {/* <img src={r2} alt={info.data.icon} /> */}
                  <p>Sensação térmica: {info.data.sensation}°</p>
                  <p>Humidade relativa do ar: {info.data.humidity}%</p>
                </div>
                <div className="box-info">
                  <p>Direção do vento: {info.data.wind_direction}</p>
                  <p>Velocidade do vento: {info.data.wind_velocity}km/h</p>
                  <p>Condição: {info.data.condition} </p>
                  <p>Pressão atmosférica {info.data.pressure} hPa</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
