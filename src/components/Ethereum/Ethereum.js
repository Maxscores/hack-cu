import React, { Component } from 'react'
import { getFeedback, getPrices } from '../../api/apiCall'
import { cleanCryptoData } from '../../cleaner'
import { mock } from '../../mockData'
import { Chart } from 'react-google-charts'

export class Ethereum extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount () {
    const ethPrice = await getPrices('ETH')
    debugger;
    const cleanEth = cleanCryptoData(ethPrice)
    
    console.log('clean: ', cleanEth)
    this.setState({current: cleanEth})
  }

  render () {
    return (
      <div className="Ethereum">
        Ethereum
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