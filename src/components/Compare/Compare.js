import React, { Component } from 'react'
import { getPrices } from '../../api/apiCall'
import { cleanCryptoData, weekCryptoData } from '../../cleaner'
import { LineChart } from 'react-chartkick'
import { compareData } from '../../normalize'
window.Chart = require('chart.js')

export class Compare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ethereum: [],
      bitcoin: [],
      ethWeek: [],
      bitWeek: []
    }
  }

  async componentDidMount () {
    const ethPrice = await getPrices('ETH')
    const bitcoinPrice = await getPrices('BTC')
    //day twitter comp
    //week twitter comp

    const cleanEth = cleanCryptoData(ethPrice)
    const cleanBitcoin = cleanCryptoData(bitcoinPrice)

    const compareEth = compareData(cleanEth)
    const compareBit = compareData(cleanBitcoin)

    const weekEthData = weekCryptoData(ethPrice)
    const weekBitData = weekCryptoData(bitcoinPrice)
    const weekEthComp = compareData(weekEthData)
    const weekBitComp = compareData(weekBitData)

    this.setState({
      ethereum: compareEth,
      bitcoin: compareBit,
      ethWeek: weekEthComp,
      bitWeek: weekBitComp
    })
  }

  render () {
    const dayData = [
      { "name": "bitcoin", 
        "data": this.state.bitcoin },
      { "name": "ethereum",
        "data": this.state.ethereum }
    ]

    const weekData = [
      { "name": "bitcoin", 
        "data": this.state.bitWeek },
      { "name": "ethereum",
        "data": this.state.ethWeek }
    ]
    return (
      <div className="compare">
        Compare
        <div className="content">
        <LineChart data={dayData}
                   title='Price (normalized) for comparison - 1 day (past 24 hrs)'
                   xtitle='Time'
                   ytitle='Price'
                   min={0}
                   max={1}
                   library={{height: "500px"}} />
        <LineChart data={weekData}
                   title='Price (normalized) for comparison - 1 week (past 168 hrs)'
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