<template>
    <div>
        <login-welcome/>
        <tip/>
        <promotion/>
    </div>
</template>

<script>
import LoginWelcome from './LoginWelcome.vue'
import Promotion from './Promotion.vue'
import Tip from './Tip.vue'

export default {
  components: { LoginWelcome, Tip, Promotion },
    name: 'CardBar',
    data() {
        return {
            
        }
    },
    created() {

    },
    methods: {

    }
}
</script>

