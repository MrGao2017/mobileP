<template>
  <div class='block-content'> 
    <input type="button" value='点击加' @click='incrementAdd' />
    计数：{{counts}}
  </div>
</template>

<script>
  // import mapState from 'vuex'

  export default {
    data () {
      return {
        // counts: this.$store.state.count
      }
    },
    computed: {
      counts () {
        console.log(this.$store)
        return this.$store.getters.computedCount
      }
    },
    created () {
      console.log(123)
      console.log()
    },
    methods: {
      incrementAdd () {
        // this.$store.commit('add')

        /* this.$store.commit({
          type: 'add'
        }) */

        this.$store.dispatch('actionAdd')
      }
    }
  }
</script>
<style>

</style>
