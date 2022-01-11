import { defineStore } from 'pinia'

export const useCounter = defineStore({
  id: 'counter',
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 0
    }
  },
  actions: {
    increment(payLoad: number) {
      console.log(payLoad)
      this.counter += payLoad
    }
  }
})
