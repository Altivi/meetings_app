import React from 'react'
import Meeting from '../containers/Meeting'

const MeetingPage = props => (
  <div className="meeting-page col-md-12">
    <Meeting params={props.match.params}/>
  </div>
)

export default MeetingPage