import { createStore, action, persist } from 'easy-peasy'
import info from '../info.json'

export default createStore({
  menu: persist({
    term: '',
    updateTerm: action((state, payload) => {
      state.term = payload
      return
    })
  }),
  me: {
    info
  }
})
