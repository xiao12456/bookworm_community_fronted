<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥂 推广</span>
    </div>
    <div>
      <p v-for="(item, index) in list" :key="item.id" class="block">
        <a :href="item.link" target="_blank" :title="item.description">{{ item.title }}</a>
      </p>
    </div>
  </el-card>
</template>

<script>
import { getList } from '@/api/promotion'

export default {
  name: 'Promotion',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    async fetchList() {
      getList().then(response => {
        const { data } = response
        this.list = data;
      }).catch(() => {

      })
    },
  }
}
</script>

<style scoped>
</style>
