<template>
  <div>
    <h1>防抖（debounce）</h1>
    <section>
      所谓防抖，就是指触发事件后 n 秒后才执行函数，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
    </section>
    <ul>
      <li>
        <div>非立即防抖</div>
        <button @click="submit">提交了几次</button><span>{{ data.count }}</span>
      </li>
      <li>
        <div>非立即防抖</div>
        <button @click="submitImmediate">提交了几次</button><span>{{ data.count }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { debounce } from './debounce'
const data = reactive({
  count: 0
})

// const submit = (() => {
//   console.log(11111)
//   return () => {

//   }
// })()
const submit = debounce(() => {
  data.count++
}, 500, false)
const submitImmediate = debounce(() => {
  data.count++
}, 500, true)
</script>
