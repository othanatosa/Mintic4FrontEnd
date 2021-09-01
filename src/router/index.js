import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Task from '@/components/Task'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    }
  ]
})
