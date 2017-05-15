import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Alpha from './Alpha'
import PureAlpha from './Pure-Alpha'


let Data = {
  'name': 'Benchmark'
}

class Benchmark extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: 'Benchmark'
      }
    }

    this.changeData = this.changeData.bind(this)
  }

  render () {
    return (
      <Alpha data={ this.state.data } click={ this.changeData } />
    )
  }

  changeData () {
    this.setState({
      data: {
        name: 'Benchmark-' + new Date().getTime()
      }
    })
  }

}

class PureBenchmark extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: 'PureBenchmark'
      }
    }

    // this.changeData = this.changeData.bind(this)
  }

  render () {
    
    return (
      <PureAlpha data={ this.state.data } click={ this.changeData.bind(this) } />
    )
  }

  changeData () {
    this.setState({
      data: {
        name: 'PureBenchmark-' + new Date().getTime()
      }
    })
  }

}


ReactDOM.render(
  <Benchmark />
, document.getElementById('common'));

ReactDOM.render(
  <PureBenchmark />
, document.getElementById('pure'))

// function changeData() {
//   console.log('changeData')
//   Data.name = `Benchmark, click at ${ new Date().getTime() }`;
// }