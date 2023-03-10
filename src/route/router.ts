import { createRouter, createWebHistory } from "vue-router"
import debounce from './modules/debounce'
import index from './modules/index'

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes: [
    ...index,
    ...debounce
  ]
})

export default router         