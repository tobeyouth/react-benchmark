import React from 'react'
import ReactDom from 'react-dom'
import ComponentWrap from './component'
import FunctionalWrap from './functional'
import PureComponentWrap from './pure'
import Perf from 'react-addons-perf'

class Benchmark extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    Perf.stop()
    let measurements = Perf.getLastMeasurements()
    console.log('measurements', measurements)
    console.log('%c printInclusive', 'font-size: 14px;color: #f00');
    Perf.printInclusive()
    console.log('%c printExclusive', 'font-size: 14px;color: #f00');
    Perf.printExclusive()
    console.log('%c printWasted', 'font-size: 14px;color: #f00');
    Perf.printWasted()
    // console.log('%c printOperations', 'font-size: 14px;color: #f00');
    // Perf.printOperations()
  }

  constructor (props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  render () {
    const { number } = this.state

    return (
      <div className='benchmark'>
        <div className='field'>
          <input ref='input' />
          <button onClick={ this.setNumber.bind(this) }>click</button>
        </div>
        <div className='list'>
          <FunctionalWrap number={ number } />
          <ComponentWrap number={ number } />
          <PureComponentWrap number={ number } />
        </div>
      </div>
    )
  }

  setNumber () {
    let number = ReactDom.findDOMNode(this.refs['input']).value
    Perf.start()
    this.setState({
      number: parseInt(number, 10)
    })
  }
}


ReactDom.render(<Benchmark />, document.getElementById('benchmark'))