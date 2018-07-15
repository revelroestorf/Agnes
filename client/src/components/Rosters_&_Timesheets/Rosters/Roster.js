import React, { Component } from 'react'
import ShiftRow from './ShiftRow'
import '../../../stylesheets/Roster.css'


class Roster extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount = () => {

  }

  render() {
    const { users, weekDate, staff } = this.props

    // console.log(new Date(weekDate))


    return (
      <div className="rosters-cells">

        <div className="days-header">
          <div className="days-column">
            <div></div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
        </div>

        <div className="shifts-main">
          {/* Add column headings here: M,T,W,TH,F,S,S */}
            {
              staff.map((staffMember) => {
                return (
                  <ShiftRow staffMember={staffMember}
                            weekDate={weekDate}
                            users={users}
                  />
                )
              })
            }
        </div>

      </div>

    )
  }
}

export default Roster
