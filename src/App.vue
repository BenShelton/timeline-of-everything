<template>
  <h1>Timeline of Everything</h1>
  <Timeline
    title="Main"
    :items="items"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timeline from './components/Timeline.vue'

import { items } from './data/timeline'

export default defineComponent({
  name: 'App',

  components: {
    Timeline
  },

  setup () {
    return {
      items
    }
  }
})
</script>

<style lang="sass">
@import "vis-timeline/styles/vis-timeline-graph2d.css"
</style>
