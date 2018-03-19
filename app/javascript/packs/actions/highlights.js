import * as ACTION_TYPES from '../constants/actionTypes'

import API_URL from '../constants/api'
import axios from 'axios'

/************** CREATE HIGHLIGHT ***************/

function requestCreateHighlight() {
  return {
    type: ACTION_TYPES.REQUEST_CREATE_HIGHLIGHT
  }
}

function highlightCreated(highlight) {
  return {
    type: ACTION_TYPES.HIGHLIGHT_CREATED,
    highlight: highlight
  }
}

function createHighlightError(errors) {
  return {
    type: ACTION_TYPES.CREATE_HIGHLIGHT_ERROR,
    errors
  }
}

export function createHighlight(meetingId, data) {
  return async (dispatch, getState) => {
    dispatch(requestCreateHighlight())
    axios({
      method: 'post',
      url: `${API_URL}/meetings/${meetingId}/highlights`,
      data: {
        highlight: data
      }
    })
    .then(response => {
      dispatch(highlightCreated(response.data))
    })
    .catch(error => {
      error.response ? dispatch(createHighlightError(error.response.data.message)) : dispatch(createHighlightError("Unknown error"))
    })
  }
}