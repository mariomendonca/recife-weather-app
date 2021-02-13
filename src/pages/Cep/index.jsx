import { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css'

export default function Testing() {
  const [cep, setCep] = useState([])

  useEffect(() => {
    const buscarCep = async () => {
      const res = await axios.get(`https://viacep.com.br/ws/52020095/json/`)
      setCep([res])
    }
    buscarCep()

  }, [])
  console.log(cep)
  return (
    <div className='home-container'>
      <h1>hello world</h1>
      <ul>
        {cep.map(info => (
          <h2 key={info.data.cep}>{info.data.cep}, {info.data.logradouro}</h2>
        ))} 
      </ul>
    </div>
  )
}
