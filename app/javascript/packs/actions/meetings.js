import * as ACTION_TYPES from '../constants/actionTypes'

import API_URL from '../constants/api'
import axios from 'axios'

/**************** FETCH MEETINGS **************/

function requestFetchMeetings() {
  return {
    type: ACTION_TYPES.REQUEST_FETCH_MEETINGS,
    meetingsIsFetching: true
  }
}

function receiveMeetings(meetings) {
  return {
    type: ACTION_TYPES.RECEIVE_MEETINGS,
    meetings: meetings,
    meetingsIsFetching: false
  }
}

function fetchMeetingsError(errors) {
  return {
    type: ACTION_TYPES.FETCH_MEETINGS_ERROR,
    meetingsIsFetching: false,
    errors
  }
}

export function fetchMeetings() {
  return async (dispatch, getState) => {
    dispatch(requestFetchMeetings())
    axios({
      method: 'get',
      url: API_URL + '/meetings'
    })
    .then(response => {
      dispatch(receiveMeetings(response.data.meetings))
    })
    .catch(error => {
      error.response ? dispatch(fetchMeetingsError(error.response.data.message)) : dispatch(fetchMeetingsError("Unknown error"))
    })
  }
}

/**************** FETCH MEETING **************/

function requestFetchMeeting() {
  return {
    type: ACTION_TYPES.REQUEST_FETCH_MEETING,
    meetingIsFetching: true
  }
}

function receiveMeeting(meeting) {
  return {
    type: ACTION_TYPES.RECEIVE_MEETING,
    meeting: meeting,
    meetingIsFetching: false
  }
}

function fetchMeetingError(errors) {
  return {
    type: ACTION_TYPES.FETCH_MEETING_ERROR,
    meetingIsFetching: false,
    errors
  }
}

export function fetchMeeting(id) {
  return async (dispatch, getState) => {
    dispatch(requestFetchMeeting())
    axios({
      method: 'get',
      url: API_URL + '/meetings/' + id
    })
    .then(response => {
      dispatch(receiveMeeting(response.data))
    })
    .catch(error => {
      error.response ? dispatch(fetchMeetingError(error.response.data.message)) : dispatch(fetchMeetingError("Unknown error"))
    })
  }
}

/************** CREATE MEETING ***************/

function requestCreateMeeting() {
  return {
    type: ACTION_TYPES.REQUEST_CREATE_MEETING,
    createMeetingIsFetching: true
  }
}

function meetingCreated(meeting) {
  return {
    type: ACTION_TYPES.MEETING_CREATED,
    meeting: meeting,
    createMeetingIsFetching: false
  }
}

function createMeetingError(errors) {
  return {
    type: ACTION_TYPES.CREATE_MEETING_ERROR,
    createMeetingIsFetching: false,
    errors
  }
}

export function createMeeting(data) {
  return async (dispatch, getState) => {
    dispatch(requestCreateMeeting())
    axios({
      method: 'post',
      url: API_URL + '/meetings.json',
      data: data
    })
    .then(response => {
      dispatch(meetingCreated(response.data))
    })
    .catch(error => {
      error.response ? dispatch(createMeetingError(error.response.data.message)) : dispatch(createMeetingError("Unknown error"))
    })
  }
}