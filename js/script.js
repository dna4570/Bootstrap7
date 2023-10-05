import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//メソッド(method)について

// const app = ({
//   data() {
//     return {
//       text:"Hello Vue",
//       count:1;
//     }
//   },

//   methods: {
//     changeText(text) {
//       this.text = text

//     },

//     countUp() {
//       this.count++
//     }
//   },

//   mounted() {
//   },
// })

// Vue.createApp(app).mount('#app')
// const app = ({
//   data() {
//     return {
//       firstName :'たろ',
//       lastName:'山田',
//     }
//   },

//   methods:{
//     fullName() {
//       return this.lastName + this.firstName
//     },
//     now() {
//       return new Date()
//     }

//   },
//   computed: {
//     fullNameComputed() {
//       return this.LashName + this.firstName
//     }
//   }
// })
// Vue.createApp(app).mount('"app')
// const app = ({
//   data() {
//     return {
//       text: 'Hello Vue!',
//       test:true,
//       b: true
//     }
//   },
// })

// Vue.createApp(app).mount('#app')
const app = ({
  data:function() {
    return {
      text:'Hello'
      a: 1,
      b: ['a','b'],
      c:{
        name:'front-end',
      }
    }
  }
})

Vue.createApp(app).mount("#app")
