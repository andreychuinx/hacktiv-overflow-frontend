import axios from 'axios'
import * as types from './mutation_types'

export default {

  signin(context, { email, password}) {
    return new Promise((resolve, reject) =>{
      axios.post('/signin', {
        email,
        password
      })
      .then(result =>{
        context.commit(types.SIGNIN, {
          token: result.data.data.authorization,
          user: result.data.data.user
        })
        resolve()
      })
      .catch(err =>{
        reject(err)
      })
    })
    
  },
  signup(context, {name, email, password}){
    return new Promise((resolve, reject) =>{
      axios.post('/signup', {
        name,
        email,
        password
      })
      .then(result => {
        resolve()
      })
      .catch(err =>{
        reject(err)
      })
    })
    
  },
  logout(context){
    console.log('test from actions')
    context.commit(types.SIGNOUT)
    
  },
  actQuestions(context){
    return new Promise((resolve, reject) =>{
      axios.get('/questions')
      .then(result => {
        context.commit(types.GET_QUESTIONS, {
          data: result.data.data
        })
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  actQuestionsUser(context){
    axios.get('/questions/user/getquestions')
    .then(result => {
      context.commit(types.GET_QUESTIONS_USER, {
        data: result.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  actQuestion(context, {id}){
    return new Promise((resolve, reject) =>{
      axios.get(`/questions/${id}`)
      .then(result => {
        context.commit(types.GET_QUESTION, {
          data: result.data.data
        })
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  editQuestion(context, {id, question, description}){
    axios.put(`/questions/${id}`, {
      question,
      description
    })
    .then(result => {
      context.commit(types.EDIT_QUESTION, {
        data: result.data.data 
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  deleteQuestion(context, { id }){
    axios.delete(`/questions/${id}`)
    .then(result => {
      context.commit(types.DELETE_QUESTION, {
        data: result.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  addQuestion(context, {question, description}){
    return new Promise((resolve, reject) =>{ 
      axios.post('/questions', {
        question,
        description
      })
      .then(result => {
        
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  addAnswer(context, {id, answer}){
    return new Promise((resolve, reject) =>{
      axios.post(`/questions/${id}/answer`, {
        answer
      })
      .then(result => {
        context.commit(types.ADD_ANSWER, {
          data: result.data.data
        })
        resolve()
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  deleteAnswer(context, {idQuestion, idAnswer}){
    return new Promise((resolve, reject) => {
      axios.delete(`/questions/${idQuestion}/answer/${idAnswer}`)
      .then(result => {
        context.commit(types.DELETE_ANSWER, {
          data: result.data.data
        })
        resolve()
      })
      .catch(err =>{
        reject(err)
      })
    })
  },
  voteQuestion(context, {idQuestion, status}){
    axios.post(`/questions/${idQuestion}/vote`, {
      status
    })
    .then(result => {
      console.log(result.data.data)
      context.commit(types.VOTE_QUESTION, {
        data : result.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  voteAnswer(context, {idQuestion, idAnswer, status}){
    axios.post(`/questions/vote/${idAnswer}/answer`, {
      status
    })
    .then(result => {
      console.log(result.data.data)
      context.commit(types.VOTE_ANSWER, {
        data: result.data.data
      })
    })
    .catch(err => {
      console.log(err)

    })
  },
  user(context, {user}){
    axios.get(`/users`)
    .then(result => {
      context.commit(types.DATA_USER, {
        data: result.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }


}