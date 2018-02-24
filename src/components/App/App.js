import React, { Component } from 'react'
import './App.css'

//components:
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App