import React, { Component } from 'react'
import { getPrices } from '../../api/apiCall'
import { cleanCryptoData, weekCryptoData } from '../../cleaner'
//import { mock } from '../../mockData'
import { Chart } from 'react-google-charts'
import { LineChart, Timeline } from 'react-chartkick'
window.Chart = require('chart.js')

export class Bitcoin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount () {
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
             xtitle='Time'
             ytitle='Price'
             min={null}
             max={null}
             library={{height: "500px"}} />
      }
        <div className="content">
        {
          this.state.current &&
          <Chart
            chartType="ScatterChart"
            data={this.state.current}
            options={{
              title: 'Price over Time',
              hAxis: { title: 'Time', maxValue: 0 },
              vAxis: { title: 'Price' },
              trendlines: {
                0: {
                  type: 'polynomial',
                  degree: 3,
                  visibleInLegend: true,
                }
              }
            }}
            graph_id="ScatterChart"
            width="100%"
            height="400px"
            legend_toggle
          />
        }
        </div>
      </div>
    )
  }
}