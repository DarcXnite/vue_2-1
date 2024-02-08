const data = () => {
  return {
    firstName: 'Davis',
    lastName: 'Nguyen',
    url: 'http://google.com',
    raw_url: '<a href="http://google.com" target="_blank">Google</a>',
    age: 20,
  }
}

const vm = Vue.createApp({
  data,
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    },
    increment() {
      this.age++
    },
    updateLastName(msg, e) {
      this.lastName = e.target.value
      console.log(msg)
    },
  },
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Bob'
// }, 2000)
