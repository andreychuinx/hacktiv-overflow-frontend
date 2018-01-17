export default {
  getStatusLogin: state => {
    return state.isLoggedIn
  },
  getUser: state => {
    if (state.isLoggedIn) {
      let user = JSON.parse(localStorage.getItem('user'))
      return user
    }
  },
  getQuestions: state =>{
    return state.questions
  },
  getQuestion: state => {
    return state.question
  },
  countAnswer: (state) => (question) => {
    if(state.questions){
      let countAnswer = question.answer.length
      return countAnswer
    }
  },
  countVoteUp: (state) => (question) => {
    let countUp = question.vote.filter(quest => {
      return quest.status == 'up'
    })
    console.log(countUp)
    return countUp.length
  },
  countVoteDown: (state) => (question) => {
    let countUp = question.vote.filter(quest => {
      return quest.status == 'down'
    })
    return countUp.length
  },
  authVote: (state) => (createdBy) => {
    if(localStorage.getItem('user')){
      let user = JSON.parse(localStorage.getItem('user'))
      if(createdBy._id == user.userId){
        return false
      }else{
        return true
      }
    }else{
      return false
    }
  },
  authQuestion: (state) => {
    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  },
  statusVote: (state) =>{
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(state.question.vote, 'adaskoadkasow')
    if(state.question.vote.length > 0){
      let counter = 0
      
      state.question.vote.forEach((vote, idx) => {
        if(vote.userVote == user.userId){
          counter ++
        }
      })
      if(counter >= 1){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  },
  statusAnswer: (state) => (answer) => {
    let user = JSON.parse(localStorage.getItem('user'))
    let findAnswer = state.question.answer.filter(answers => {
      return answers._id == answer._id
    })
    if(findAnswer[0].vote.length > 0){
      let counter = 0
      findAnswer[0].vote.forEach(v => {
        if(v.userVote == user.userId){
          counter ++
        }
      })
      if(counter >= 1){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
    
  }
}
