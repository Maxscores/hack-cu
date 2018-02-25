import React, { Component } from 'react'
import { ScatterChart } from 'react-chartkick';
import { getPrices } from '../../api/apiCall'
import { cleanCryptoData, weekCryptoData } from '../../cleaner'
import { Chart } from 'react-google-charts'
import './Bitcoin.css'
import logo from '../../Bitcoin_logo.svg';
import { LineChart } from 'react-chartkick'
window.Chart = require('chart.js')

export class Bitcoin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount () {
    //also need:
    //twitter mentions, twitter x price

    const bitcoinPrice = await getPrices('BTC')
    const cleanBit = cleanCryptoData(bitcoinPrice)
    const weekBit = weekCryptoData(bitcoinPrice)
    
    this.setState({
      current: cleanBit,
      week: weekBit
    })
  }

  render () {
    return (
      <div className="Bitcoin">
        <img src={logo} />
        <div className='graph-container'>
      {
        this.state.week &&
        <LineChart data={this.state.week}
             title='Bitcoin price - 1 week (last 168 hrs)'
             xtitle='Time'
             ytitle='Price'
             min={null}
             max={null}
             width='100%'
             height='500px' />
      }
        <div className="content">
        {
          this.state.current &&
          <LineChart data={this.state.current}
               title='Bitcoin price - 1 day (last 24 hrs)'
               xtitle='Time'
               ytitle='Price'
               min={null}
               max={null}
               width='100%'
               height='500px' />
        }
          </div>
        </div>
      </div>
    )
  }
}