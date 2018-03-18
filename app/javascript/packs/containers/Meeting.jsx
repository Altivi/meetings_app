import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMeeting } from '../actions/meetings'

class Meeting extends Component {
  componentWillMount() {
    const { fetchMeeting, params } = this.props
    fetchMeeting(params.id)
  }

  render() {
    const { meeting } = this.props
    const highlights = meeting.highlights
    return (
      <div className="row">
        <div className="panel-default">
          <div>Title: <Link to={"/meetings/" + meeting.id}>{meeting.title}</Link></div>
          <div>Organizer email: {meeting.organizer_emai}</div>
          <div>Start time: {meeting.start_time}</div>
          <div>End time: {meeting.end_time}</div>
          <ul className="highlights">
            {
              highlights && highlights.map((highlight, i) => {
                return (
                  <li className="list-group-item" key={i}>
                    <div>Text: {highlight.highlight_text}</div>
                    <div>Start time: {highlight.start_time}</div>
                    <div>End time: {highlight.end_time}</div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    meeting: state.meetings.activeMeeting,
    meetingIsFetching: state.meetings.meetingIsFetching
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    fetchMeeting
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Meeting);