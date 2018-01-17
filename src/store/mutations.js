import * as types from './mutation_types'
import axios from 'axios'

export default {
  [types.SIGNIN](state, {token, user}) {
    let dataUser = JSON.stringify(user)
    localStorage.setItem('token', token)
    localStorage.setItem('user', dataUser)
    axios.defaults.headers.common['authorization'] = token
    state.isLoggedIn = true
  },
  [types.GET_QUESTIONS](state, { data }){
    state.questions = data
  },
  [types.SIGNOUT](state){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    state.isLoggedIn = false
  },
  [types.GET_QUESTION](state, { data }) {
    state.question = data
  },
  [types.ADD_ANSWER](state, { data }){
    state.question = data
  },
  [types.DELETE_ANSWER](state, { data }){
    state.question = data
  },
  [types.VOTE_QUESTION](state, { data }){
    state.question = data
  },
  [types.VOTE_ANSWER](state, { data }){
    state.question = data
  },
  [types.DATA_USER](state, { data }){
    state.user = data
  },
  [types.GET_QUESTIONS_USER](state, { data }){
    state.questionsUser = data
  },
  [types.EDIT_QUESTION](state, { data }){
    state.question = data
  },
  [types.DELETE_QUESTION](state, { data }){
    state.questionsUser = state.questionsUser.filter(question => {
      return question._id !== data._id
    })
  }
}