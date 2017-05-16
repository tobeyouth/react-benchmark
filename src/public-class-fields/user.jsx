import React from 'react'

class User extends React.Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props
  // }

  render () {
    console.log('render user')
    return (
      <div className='user'>
        <p>is a component</p>
        <p>name: { this.props.data.name }</p>
        <p>id: { this.props.data.id }</p>
        <div className='buttons'>
          <button onClick={ this.props.onClick }>Change Data</button>
        </div>
      </div>
    )
  }
}

export default User
