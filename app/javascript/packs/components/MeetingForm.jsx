import React, { Component } from 'react'
import { range } from 'lodash'

class MeetingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      organizer_email: '',
      start_time: '',
      end_time: '',
      highlightsCount: 1
    }

    this.handleHighlightFieldChange = this.handleHighlightFieldChange.bind(this);
    this.handleAddNewHighlight = this.handleAddNewHighlight.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleHighlightFieldChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  handleAddNewHighlight(event) {
    const { highlightsCount } = this.state
    if (highlightsCount < 20) {
      this.setState({
        highlightsCount: highlightsCount + 1
      })
    }
    event.preventDefault()
  }

  handleSubmit(event) {
    const { createMeeting } = this.props
    createMeeting(this.state)
    this.setState({})
    event.preventDefault()
  }

  render() {
    const { highlightsCount } = this.state
    return (
      <div className="meeting-form col-md-6">
        <p>Add meeting</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              name="title"
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleInputChange} /><br/>
            <input
              name="organizer_email"
              type="email"
              placeholder="Organizer email"
              value={this.state.organizer_email}
              onChange={this.handleInputChange} /><br/>
            <input
              name="start_time"
              type="datetime-local"
              placeholder="Start time"
              value={this.state.start_time}
              onChange={this.handleInputChange} /><br/>
            <input
              name="end_time"
              type="datetime-local"
              placeholder="End time"
              value={this.state.end_time}
              onChange={this.handleInputChange} /><br/>
            <div className="highlights-list">
              <ul>
                {
                  range(1, highlightsCount).map((i) => {
                    return (
                      <li key={i}>
                        <div className="form-group">
                          <input
                            name={"highlight" + i}
                            type="text"
                            placeholder="Text"
                            value={this.state["highlight" + i] && this.state["highlight" + i]["highlight_text"]}
                            onChange={(e) => this.handleHighlightFieldChange("highlight" + i, {
                              ...this.state["highlight" + i],
                              highlight_text: e.target.value
                            })} /><br/>
                          <input
                            name={"highlight" + i}
                            type="datetime-local"
                            placeholder="Start time"
                            value={this.state["highlight" + i] && this.state["highlight" + i]["start_time"]}
                            onChange={(e) => this.handleHighlightFieldChange("highlight" + i, {
                              ...this.state["highlight" + i],
                              start_time: e.target.value
                            })} /><br/>
                          <input
                            name={"highlight" + i}
                            type="datetime-local"
                            placeholder="End time"
                            value={this.state["highlight" + i] && this.state["highlight" + i]["end_time"]}
                            onChange={(e) => this.handleHighlightFieldChange("highlight" + i, {
                              ...this.state["highlight" + i],
                              end_time: e.target.value
                            })} /><br/>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <a href="" onClick={this.handleAddNewHighlight}>Add highlight</a>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default MeetingForm