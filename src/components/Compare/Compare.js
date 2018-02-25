import React, { Component } from 'react'
import { getFeedback, getPrices } from '../../api/apiCall'
import { cleanCryptoData } from '../../cleaner'
import { mock } from '../../mockData'
import { ScatterChart } from 'react-chartkick';
import { Chart } from 'react-google-charts'

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
    
    this.setState({
      ethereum: cleanEth,
      bitcoin: cleanBitcoin
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
        <ScatterChart  data={data}
                       xtitle='Time'
                       ytitle='Price'
                       min={null}
                       max={null}
                       library={{height: "300px"}} />
        </div>
      </div>
    )
  }
}