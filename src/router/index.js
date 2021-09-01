import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    }
  ]
})
