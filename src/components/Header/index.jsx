import { FiLinkedin, FiGithub } from "react-icons/fi";

import './styles.css'

export default function Header() {
  return (
    <div id="navbar">
      <div className="navbar">
        <a href='/'>by Mário Mendonça</a>
        <div className='menu'>
          <a href="https://github.com/mariomendonca"
            target='blank'
          >
            <FiGithub color={'black'} size={30}/>
          </a>
          <a href="https://www.linkedin.com/in/mario-mendon%C3%A7a-762803162/"
            target='blank'
          >
            <FiLinkedin color={'black'} size={30}/>
          </a>
        </div>
      </div>
    </div>
  )
}