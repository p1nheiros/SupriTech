import React from 'react'
import "./home.css"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Image from '../../assets/logo-supritech.png';

const home = () => {
  return (
    <selection className="home container" id="home">
      <div className="intro">
        <img src={Image} alt="avatar" className="home__img" />
        <h1 className="home__name">SupriTech</h1>
        <span className="home__education">O estoque inteligente</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Contate-nos</a>

        <ScrollDown />
      </div>
    </selection>
  )
}

export default home