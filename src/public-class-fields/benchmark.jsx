import React from 'react'
import ReactDom from 'react-dom'
import User from './user'
import PureUser from './pure-user'
import Pref from 'react-addons-perf'

let Foo = {
  name: 'Foo',
  id: 'foo'
}

class PublicClassFields extends React.Component {

  componentDidUpdate() {
    Pref.stop()
    Pref.printInclusive()
    Pref.printWasted()
  }

  constructor (props) {
    super(props)
    this.state = {
      data: Foo
    }
    this.changeData = this.changeData.bind(this)
  }

  render () {

    return (
      <div>
        <div className='wrap'>
          { this.renderUser() }
          { this.renderPureUser() }
        </div>        
      </div>
    )
  }

  changeData () {
    Pref.start()
    this.setState({
      data: Foo
    })
  }

  renderUser () {
    return <User data={ this.state.data } 
            onClick={ this.changeData } />
  }

  renderPureUser () {
    return <PureUser data={ this.state.data } 
            onClick={ this.changeData } />
  }
}

class Anonymous extends React.Component {

  componentDidUpdate() {
    Pref.stop()
    Pref.printInclusive()
    Pref.printWasted()
  }

  constructor (props) {
    super(props)
    this.state = {
      data: Foo
    }
  }

  render () {

    return (
      <div>
        <div className='wrap'>
          { this.renderUser() }
          { this.renderPureUser() }
        </div>        
      </div>
    )
  }

  changeData () {
    Pref.start()
    this.setState({
      data: Foo
    })
  }

  renderUser () {
    return <User data={ this.state.data } 
            onClick={ this.changeData.bind(this) } />
  }

  renderPureUser () {
    return <PureUser data={ this.state.data } 
            onClick={ this.changeData.bind(this) } />
  }
}

ReactDom.render(<PublicClassFields />, document.getElementById('public'))
ReactDom.render(<Anonymous />, document.getElementById('anonymous'))