import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/event/Details.vue'
import EventLayout from '../views/event/Layout.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'

import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({
      page: parseInt(route.query.page) || 1,
      prePage: parseInt(route.query.prePage) || 2
    })
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit
      }
    ]
  },
  // 將舊的 event 網址導向 events
  // 方法一
  // {
  //   path: '/event/:id',
  //   redirect: () => ({ name: 'EventDetails' }),
  //   children: [
  //     { path: 'register', redirect: () => ({ name: 'EventRegister' }) },
  //     { path: 'edit', redirect: () => ({ name: 'EventEdit' }) }
  //   ]
  // },

  // 方法二 通配符 (.*)
  // 將匹配字詞後面的所有內容 /event/ 放入 /events/，並且涵蓋了所有子路由
  {
    path: '/event/:passParams(.*)',
    redirect: to => ({ path: `/events/${to.params.passParams}` })
  },
  {
    path: '/about-us',
    name: 'About',
    component: About,
    alias: '/about' // 輸入 about, 也顯示 about-us 組件內容, 網址不會改成 /about-us
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
