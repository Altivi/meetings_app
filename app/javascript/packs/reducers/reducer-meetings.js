import * as ACTION_TYPES from '../constants/actionTypes'

import HighlightsReducer from './reducer-highlights'

const initialState = {
  meetingsIsFetching: false,
  createMeetingIsFetching: false,
  activeMeeting: {
    highlights: []
  },
  list: [
    {
      highlights: []
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_FETCH_MEETING:
    case ACTION_TYPES.REQUEST_FETCH_MEETINGS:
    case ACTION_TYPES.REQUEST_CREATE_MEETING:
      return {
        ...state,
        meetingsIsFetching: action.meetingsIsFetching,
        createMeetingIsFetching: action.createMeetingIsFetching
      }
    case ACTION_TYPES.RECEIVE_MEETING:
      return {
        ...state,
        meetingIsFetching: action.meetingsIsFetching,
        activeMeeting: action.meeting,
        errors: ''
      }
    case ACTION_TYPES.RECEIVE_MEETINGS:
      return {
        ...state,
        meetingsIsFetching: action.meetingsIsFetching,
        list: action.meetings,
        errors: ''
      }
    case ACTION_TYPES.MEETING_CREATED:
      return {
        ...state,
        createMeetingIsFetching: action.createMeetingIsFetching,
        list: [
          action.meeting,
          ...state.list
        ]
      }
    case ACTION_TYPES.HIGHLIGHT_CREATED:
      return {
        ...state,
        activeMeeting: {
          ...state.activeMeeting,
          highlights: HighlightsReducer(state.activeMeeting.highlights, action)
        },
        errors: ''
      }
    case ACTION_TYPES.FETCH_MEETING_ERROR:
    case ACTION_TYPES.FETCH_MEETINGS_ERROR:
    case ACTION_TYPES.CREATE_MEETING_ERROR:
      return {
        ...state,
        meetingsIsFetching: action.meetingsIsFetching,
        createMeetingIsFetching: action.createMeetingIsFetching,
        errors: action.errors
      }
    default:
      return state
  }
}