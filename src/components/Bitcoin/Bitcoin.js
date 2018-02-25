import React, { Component } from 'react'
import { ScatterChart } from 'react-chartkick';
import { getPrices } from '../../api/apiCall'
import { cleanCryptoData, weekCryptoData } from '../../cleaner'
//import { mock } from '../../mockData'
import { Chart } from 'react-google-charts'
import { LineChart, Timeline } from 'react-chartkick'
import './Bitcoin.css'
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
        <div className='graph-container'>
        {
          this.state.week &&
          <LineChart data={this.state.week}
               className='graph'
               xtitle='Time'
               ytitle='Price'
               min={null}
               max={null}
               width='100%'
               height='300px' />
        }
          <div className="content">
          <ScatterChart data={this.state.current} 
                        className='graph'
                        xtitle='Time'
                        ytitle='Price'
                        min={null}
                        max={null}
                        width='100%'
                        height='300px' />
          {
            this.state.current &&
            <Chart
              chartType="ScatterChart"
              className='graph'
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
              width='100%'
              height='300px'
              legend_toggle
            />
          }
          </div>
        </div>
      </div>
    )
  }
}