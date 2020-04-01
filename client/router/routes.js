// import Todo from "../views/todo/todo.vue";
// import Login from "../views/login/login.vue";

const routes = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    name: 'app',
    props: true,//不需要再通过this.$route来获取动态id
    // props: (route) => ({id: route.query.b}),
    path: '/app',
    meta: {
      title: 'this is app',
      description: 'this is description'
    },
    // component: Todo,
    component: ()=>import('../views/todo/todo.vue')//异步加载
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    // beforeEnter: (to, from, next) => {
    //   console.log('app route before enter')
    //   next()
    // }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: ()=>import('../views/login/login.vue')
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
export default routes;