import React from 'react'

class RostCells extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="cell" >
      <h4>{this.props.rostered}</h4>
    </div>
    )
  }
}

export default RostCells