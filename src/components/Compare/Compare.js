import React, { Component } from 'react'
import { getPrices } from '../../api/apiCall'
import { cleanCryptoData } from '../../cleaner'
//import { mock } from '../../mockData'
import { LineChart } from 'react-chartkick'
//import { Chart } from 'react-google-charts'
import { compareData } from '../../normalize'
window.Chart = require('chart.js')

export class Compare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ethereum: [],
      bitcoin: []
    }
  }

  async componentDidMount () {
    const ethPrice = await getPrices('ETH')
    const bitcoinPrice = await getPrices('BTC')

    const cleanEth = cleanCryptoData(ethPrice)
    const cleanBitcoin = cleanCryptoData(bitcoinPrice)

    // console.log('eth: ', cleanEth)

    const compareEth = compareData(cleanEth)
    const compareBit = compareData(cleanBitcoin)

    
    this.setState({
      ethereum: compareEth,
      bitcoin: compareBit
    })
  }

  render () {
    const data = [
      { "name": "bitcoin", 
        "data": this.state.bitcoin },
      { "name": "ethereum",
        "data": this.state.ethereum }
    ]
    return (
      <div className="compare">
        Compare
        <div className="content">
        <LineChart data={data}
                   xtitle='Time'
                   ytitle='Price'
                   min={0}
                   max={1}
                   library={{height: "500px"}} />
        </div>
      </div>
    )
  }
}