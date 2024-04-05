import logoHeader from '../../assets/img/logo_transparent.png';
import React from 'react'
import '../App/App.css';

function Header() {
  return (
    <header className="App-header">
        <img src={logoHeader} className="App-logo" alt="logo"/>
        </header>

  )
}

export default Header