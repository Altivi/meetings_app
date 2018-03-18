import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMeetings } from '../actions/meetings'

class MeetingsList extends Component {
  componentWillMount() {
    const { fetchMeetings } = this.props
    fetchMeetings()
  }

  renderList() {
    const { meetings, meetingsIsFetching } = this.props
    return !meetingsIsFetching && meetings.map((meeting, i) => {
      return (
        <li className="list-group-item" key={i}>
          <div>Title: <Link to={"/meetings/" + meeting.id}>{meeting.title}</Link></div>
          <div>Organizer email: {meeting.organizer_emai}</div>
          <div>Start time: {meeting.start_time}</div>
          <div>End time: {meeting.end_time}</div>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="row">
        <ul className="list-group col-md-12">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    meetings: state.meetings.list,
    meetingsIsFetching: state.meetings.meetingsIsFetching
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    fetchMeetings
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MeetingsList);