import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMeetings, createMeeting } from '../actions/meetings'
import MeetingForm from '../components/MeetingForm'

class MeetingsList extends Component {
  componentDidMount() {
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
    const { createMeeting } = this.props
    return (
      <div className="row">
        <ul className="list-group col-md-12">
          {this.renderList()}
        </ul>
        <MeetingForm createMeeting={createMeeting}/>
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
    fetchMeetings,
    createMeeting
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MeetingsList);