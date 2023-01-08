<template>
  <div>
    <h1>节流（throttle）</h1>
    <section>
      所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。 节流会稀释函数的执行频率
    </section>
    <ul>
      <li>
        <div>非立即节流</div>
        <button @click="submit">提交了几次</button><span>{{ data.count }}</span>
      </li>
      <li>
        <div>非立即节流</div>
        <button @click="submitImmediate">提交了几次</button><span>{{ data.count }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { throttle } from './throttle'
const data = reactive({
  count: 0
})

// const submit = (() => {
//   console.log(11111)
//   return () => {

//   }
// })()
const submit = throttle(() => {
  data.count++
}, 5000, 1)
const submitImmediate = throttle(() => {
  data.count++
}, 5000, 2)
</script>
