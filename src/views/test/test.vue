<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
import { getRedisValue } from '@/api/test'
export default {
  name: 'Test',
  data() {
    return {
      msg: 'adadasdasdasa'
    }
  },
  created() {
    this.get()
  },
  methods: {
    get() {
      getRedisValue().then(response => {
        console.debug()
        this.msg = response.data
      })
    }
  }
}
</script>
