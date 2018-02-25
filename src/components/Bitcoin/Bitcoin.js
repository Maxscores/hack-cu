import React, { Component } from 'react'
import { getFeedback, getPrices } from '../../api/apiCall'
import { cleanCryptoData } from '../../cleaner'
import { ScatterChart } from 'react-chartkick';
import { mock } from '../../mockData'
import { Chart } from 'react-google-charts'

export class Bitcoin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount () {
    const bitcoinPrice = await getPrices('BTC')
    const cleanBit = cleanCryptoData(bitcoinPrice)
    
    console.log('clean: ', cleanBit)
    this.setState({current: cleanBit})
  }

  render () {
    return (
      <div className="Bitcoin">
        Bitcoin
        <div className="content">
        <ScatterChart data={this.state.current} 
                      xtitle='Time'
                      ytitle='Price'
                      min={null}
                      max={null}
                      library={{height: "300px"}} />
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