import http from '../../http'

import {
  INSERT_MESSAGE,
  INSERT_MESSAGES
} from './mutation-types'

export const fetchMessages = ({commit, state}) => {
  if (state.messages.length > 0) {
    return
  }

  return new Promise((resolve, reject) => {
    http
      .get('/message')
      .then(response => {
        console.log(response)
        commit(INSERT_MESSAGES, response.data)
      }, error => {
        reject(error)
      })
  })
}

export const submitMessage = ({commit, state}, payload) => {
  return new Promise((resolve, reject) => {
    http
      .post('/message/' + payload.id, payload)
      .then(response => {
        commit(INSERT_MESSAGE, payload)
        console.log(response)
      }, error => {
        console.error(error)
        reject(error)
      })
  })
}
