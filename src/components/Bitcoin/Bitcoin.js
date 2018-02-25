import React, { Component } from 'react'
import { getPrices } from '../../api/apiCall'
import { cleanCryptoData, weekCryptoData } from '../../cleaner'
import { Chart } from 'react-google-charts'
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
        Bitcoin
      {
        this.state.week &&
        <LineChart data={this.state.week}
             title='Bitcoin price - 1 week (last 168 hrs)'
             xtitle='Time'
             ytitle='Price'
             min={null}
             max={null}
             library={{height: "500px"}} />
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
               library={{height: "500px"}} />
        }
        </div>
      </div>
    )
  }
}