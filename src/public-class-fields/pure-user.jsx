import React from 'react'

class PureUser extends React.PureComponent {


  render () {
    console.log('render pure user')

    return (
      <div className='user'>
        <p>is a pure component</p>
        <p>name: { this.props.data.name }</p>
        <p>id: { this.props.data.id }</p>
        <div className='buttons'>
          <button onClick={ this.props.onClick }>Change Data</button>
        </div>
      </div>
    )
  }
}

export default PureUser
