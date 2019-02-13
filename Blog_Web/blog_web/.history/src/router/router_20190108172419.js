import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      //路由级别代码分割
      //这会为该路由生成一个单独的块(关于.[hash].js)
      //当访问路由时，延迟加载。
      // webpackChunkName: "about" 
      component: () => import( '@/views/index/About.vue')
    },{
      path: '/Diary',
      name: 'Diary',
      //路由级别代码分割
      //这会为该路由生成一个单独的块(关于.[hash].js)
      //当访问路由时，延迟加载。
      // webpackChunkName: "about" 
      component: () => import( '@/views/home/Diary.vue')
    },{
      path: '/Blog',
      name: 'Bolg',
      //路由级别代码分割
      //这会为该路由生成一个单独的块(关于.[hash].js)
      //当访问路由时，延迟加载。
      // webpackChunkName: "about" 
      component: () => import( '@/views/home/Blog.vue')
    }
  ]
})