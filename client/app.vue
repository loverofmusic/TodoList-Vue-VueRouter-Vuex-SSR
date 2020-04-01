<template>
  <div id="app">
    <div id="cover">
      <Header />

      <!-- <Todo></Todo> -->
      <!-- <router-link :to="{name: 'app'}">app</router-link>  -->
      <!-- <router-link to="/login">login</router-link> -->
      <!-- <router-link to="/login/exact">login exact</router-link> -->
      <!-- <router-link to="/app/123">app</router-link> -->
      <!-- <router-link to="/app/456">app</router-link> -->
      <transition name="fade">
        <router-view />
      </transition>

      <Footer />
      <!-- <router-view name="a" /> -->
      <p v-if="true">{{count}}</p>
      <p v-if="false">{{fullName}}</p>
      <p v-if="false">{{counter}}</p>
    </div>
  </div>
</template>

<script>
import Header from "./layout/header.vue";
import Footer from "./layout/footer.vue";
// import Todo from "./views/todo/todo.vue";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  // name: 'App',
  components: {
    Header,
    Footer
    // Todo
  },
  mounted() {
    // console.log(this.$store);

    // let i = 1;
    // setInterval(()=>{
    //   this.$store.commit('updateCount',{"num":i++, "num2":2})//commit 只能传两个参数，一个是mutation名称，一个是payload
    // },1000)
    // setInterval(()=>{
    //   this.updateCount({num:i++, num2:2})
    // },1000)

    // this.$store.state.count = 5; //console里面给了warning，不要再外部直接修改state，只能通过mutation

    // this.$store.dispatch('updateCountAsync',{
    //   num: 5,
    //   time: 2000
    // })
    this.updateCountAsync({
      num: 500000,
      time: 2000
    })
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    ...mapState(['count']),
    // ...mapState({
    //   counter: 'count'
    // }),
    ...mapState({
      counter: (state) => state.count + 5
    }),
    // fullName() {
    //   return this.$store.getters.fullName
    // }
    ...mapGetters(['fullName'])
  }
};
</script>

<style lang="stylus" scoped>
#cover
    display flex
    flex-direction column
    align-items: center;
    height 100vh

#loading
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color rgba(255,255,255,.3)
    z-index 99
    display flex
    align-items center
    justify-content center
</style>
