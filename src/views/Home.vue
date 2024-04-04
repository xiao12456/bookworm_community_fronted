<template>
  <div>
    <div class="box">🔔 {{ billboard.content }}</div>
    <div class="columns">
      <div class="column is-three-quarters">
        <topic-list />
      </div>
      <div class="column">
        <card-bar />
      </div>
    </div>
  </div>
</template>

<script>
import { getBillboard } from '@/api/billboard'
import CardBar from '@/views/card/CardBar.vue'
import TopicList from '@/views/post/TopicList.vue'

export default {
  name: 'Home',
  components: {
    CardBar,
    TopicList 
  },
  data() {
    return {
      billboard: {
        content: ''
      }
    }
  },
  created() {
    this.fetchBillboard()
  },
  methods: {
    async fetchBillboard() {
      getTodayTip().then((value) => {
        const { data } = value;
        this.billboard = data;
      }).catch(() => {

      })
    },
  }
}
</script>
