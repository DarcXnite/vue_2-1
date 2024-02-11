const data = () => {
  return {
    firstName: 'Davis',
    middleName: '',
    lastName: 'Nguyen',
    url: 'http://google.com',
    raw_url: '<a href="http://google.com" target="_blank">Google</a>',
    age: 20,
  }
}

const vm = Vue.createApp({
  data,
  methods: {
    increment() {
      this.age++
    },
    updateLastName(msg, e) {
      this.lastName = e.target.value
      console.log(msg)
    },
    updateMiddleName(e) {
      this.middleName = e.target.value
    },
  },
  computed: {
    fullName() {
      console.log('Full name computed prop was called')
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`
    },
  },
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Bob'
// }, 2000)
