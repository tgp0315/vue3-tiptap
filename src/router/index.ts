import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', 
    component: () => import('@/components/textEditor.vue')
  },
  {
    path: '/collaborativeEditing',
    component: () => import('@/components/collaborativeEditing.vue')
  },
  {
    path: '/markdownShortcuts',
    component: () => import('@/components/markdownShortcuts.vue')
  },
  {
    path: '/menus',
    component: () => import('@/components/Menus.vue')
  },
  {
    path: '/tables',
    component: () => import('@/components/Tables.vue')
  },
  {
    path: '/images',
    component: () => import('@/components/Images.vue')
  },
  {
    path: '/formatting',
    component: () => import('@/components/Formatting.vue')
  },
  {
    path: '/tasks',
    component: () => import('@/components/Tasks.vue')
  },
  {
    path: '/longTexts',
    component: () => import('@/components/LongTexts.vue')
  },
  {
    path: '/mentions',
    component: () => import('@/components/Mentions.vue')
  },
  {
    path: '/minimalSetup',
    component: () => import('@/components/MinimalSetup.vue')
  },
  {
    path: '/customDocument',
    component: () => import('@/components/CustomDocument.vue')
  },
  {
    path: '/cleverEditor',
    component: () => import('@/components/CleverEditor.vue')
  },
  {
    path: '/interactivity',
    component: () => import('@/components/Interactivity.vue')
  },
  {
    path: '/syntaxHighlighting',
    component: () => import('@/components/SyntaxHighlighting.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router