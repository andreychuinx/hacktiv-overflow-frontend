export default {
  isLoggedIn : localStorage.getItem('token') !== null ? true : false,
  user: {},
  questions: [],
  question: {},
  questionsUser: []
}