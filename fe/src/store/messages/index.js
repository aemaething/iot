import * as actions from './actions'
import * as getters from './getters'
import {
  INSERT_MESSAGE,
  INSERT_MESSAGES
} from './mutation-types'

const state = {
  messages: {}
}

const mutations = {
  [INSERT_MESSAGE]: (state, payload) => {
    state.messages[payload.id] = payload.contents
  },
  [INSERT_MESSAGES]: (state, payload) => {
    state.messages = {}
    payload.forEach(function (message) {
      state.messages[message.id] = message.contents
    })
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}
