import React, { Component } from 'react'

class HighlightForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highlight_text: '',
      start_time: '',
      end_time: ''
    }

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

  handleSubmit(event) {
    const { createHighlight, meetingId } = this.props
    createHighlight(meetingId, this.state)
    this.setState({})
    event.preventDefault()
  }

  render() {
    return (
      <div className="highlight-form col-md-6">
        <p>Add highlight</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              name="highlight_text"
              type="text"
              placeholder="Text"
              value={this.state.highlight_text}
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
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default HighlightForm