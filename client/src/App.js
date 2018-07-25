import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'
import LogInPage from './components/login/LogInPage'
import Clock from './components/clock/Clock'
import Rosters from './components/Rosters_&_Timesheets/Rosters/Rosters'
import Timesheets from './components/Rosters_&_Timesheets/Timesheets/Timesheets'
import Staff from './components/staff/Staff'
// import StaffHeader from './components/staff/Header'
import './stylesheets/App.css';

const api = 'http://localhost:4000/'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sideBarHeading: 'FLAGS',
      users: '',
      // week1: '',
      // week2: '',
      // week3: '',
      // week4: '',
      // week5: '',
      // week6: '',
      // week7: '',
      currentWeek: '',
      staffData: [],
      payRateCategories: [],
      weeks: [],
      noRoster: false
    }
  }

  fetchShiftData = (weekID) => {
    // METHOD CALL COMMENTED OUT AS REPLACING STATE WEEK DATA SO NOT AVAILABLE TO TIMESHEETS
    let weeks = this.state.weeks
    if (weeks) {
      for (let week of weeks) {
        console.log(week, 'WEEEEK')
        if (week) {
          if (weekID === week._id) {
            axios.get(api + 'rosters/' + weekID).then((response) => {
              let weeks = []
              for (let i=0; i<response.data.length; i++) {
                weeks.push(response.data[i])
              }
              this.setState({
                weeks: weeks,
                currentWeek: weeks[0],
              })
            })
          }
        }
      }
    }
  }

  fetchAllData = (date) => {
    axios.get(api + 'rosters').then(response => {
      let weeks = []
      for (let i=0; i<response.data.length; i++) {
        weeks.push(response.data[i])
      }
      this.setState({
        weeks: weeks,
        currentWeek: weeks[0],
      })
    })
  }

  componentDidMount() {
    // Request all weeks
    this.fetchAllData()

    axios.get(api + 'users').then(response => {
      this.setState({
        users: response.data,
      })
    })

    axios.get(api + 'payRateCategories').then(response => {
      this.setState({
        payRateCategories: response.data.payRateCategories,
      })
    })

    axios.get(api + 'entitlements').then(response => {
      this.setState({
        entitlements: response.data.entitlements,
      })
    })

  }

  selectRosters = () => {

    this.setState({ sideBarHeading: 'FLAGS' })
  }

  selectTimesheets = () => {

    this.setState({ sideBarHeading: 'STAFF' })
  }

  goToNextWeek = () => {
    if (this.state.currentWeek.date === this.state.weeks[0].date) {
      axios.get(api + 'rosters/' + 'new/' + this.state.currentWeek.date).then((response) => {
        let weeks = [...this.state.weeks]
        weeks.unshift(response.data)
        weeks.pop()
        this.setState({
          weeks: weeks,
          currentWeek: response.data
        })
      })
    } else {
      for (let week of this.state.weeks) {
        if (this.state.currentWeek.date === week.date) {
          let index = this.state.weeks.indexOf(week)
          this.setState({
            currentWeek: this.state.weeks[index - 1]
          })
        }
      }
    }
  }

  goToPreviousWeek = () => {
    if (this.state.weeks[6] && this.state.currentWeek.date === this.state.weeks[6].date) {
      axios.get(api + 'rosters/' + 'previous/' + this.state.currentWeek.date).then((response) => {
        let weeks = [...this.state.weeks]
        weeks.shift()
        weeks.push(response.data)
        if (response.data) {
          this.setState({
            weeks: weeks,
            currentWeek: response.data,
          })
        }
      })
    } else {
      for (let week of this.state.weeks) {
        if (this.state.currentWeek.date === week.date) {
          let index = this.state.weeks.indexOf(week)
          this.setState({
            currentWeek: this.state.weeks[index + 1]
          })
        }
      }
    }
  }

  render() {
    console.log(this.state, 'ASDJASDK')
    if (!this.state.weeks || !this.state.currentWeek || !this.state.users || !this.state.payRateCategories || !this.state.entitlements) {return ''}

    console.log(this.state.weeks)

    // this is to simulate user authenication (roles) - switch between the following three statements
    let role = 'admin'
    // let role = 'staff'
    // let role = 'office-clock'
    let week = this.state.currentWeek

    let prevWeek = this.state.weeks[this.state.weeks.indexOf(week) + 1]

    // this is to simulate a staff member login - switch between the following two statements
    let staffUser = ''
    // let staffUser = this.state.users[0]
    return (
      <div>

        <Router>
          <div>


              <div className="navbar">
                <Link to="/rosters" onClick={ this.selectRosters }>Rosters</Link>
                <Link to="/timesheets" onClick={ this.selectTimesheets }>Timesheets</Link>
          {    (role !== 'admin') ? '' :
                  <Link to="/staff">Staff</Link> }
          {    (role === 'office-clock') ? '' :
                  <Link to="/">Logout</Link>     }

              </div>



            <Route path='/rosters' render={(routerprops) => (
              <Rosters  currentWeek={ this.state.currentWeek }
                        weeks={ this.state.weeks }
                        users={ this.state.users }
                        goToNextWeek={ this.goToNextWeek }
                        goToPreviousWeek={ this.goToPreviousWeek }
                        sideBarHeading={ this.state.sideBarHeading }
                        fetchData={ this.fetchShiftData }
                        role={ role }
                        /> )}
            />

            <Route path='/timesheets' render={(routerprops) => (
              <Timesheets currentWeek={ this.state.currentWeek }
                          week={ week }
                          prevWeek={ prevWeek }
                          users={ this.state.users }
                          payRateCategories={ this.state.payRateCategories }
                          entitlements={ this.state.entitlements }
                          goToNextWeek={ this.goToNextWeek }
                          goToPreviousWeek={ this.goToPreviousWeek }
                          sideBarHeading={ this.state.sideBarHeading }
                          role={ role }
                          staffUser={ staffUser }

              /> )}
            />

            <Route path='/staff' render={(routerProps) => {
              return (
                <Staff payRates={ this.state.payRateCategories }/>
              )
            }} />

            <Route path='/clock' render={(routerProps) => {
              return (
                <Clock  week={ this.state.weeks[2] }
                        user={ staffUser }
                        users={ this.state.users }
                        api={ api }
                />
              )
            }} />

            <Route path='/login' component={ LogInPage } />



          </div>
        </Router>




      </div>
    );
  }
}

export default App;
