<template>
  <h1>Timeline of Everything</h1>
  <Timeline
    title="Main"
    :items="items"
    :start="start"
    :end="end"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timeline from './components/Timeline.vue'

import { items } from './data/timeline'
import { getDate } from './utils'

export default defineComponent({
  name: 'App',

  components: {
    Timeline
  },

  setup () {
    const start = getDate(-6000)
    const end = new Date()

    return {
      start,
      end,
      items
    }
  }
})
</script>

<style lang="sass">
@import "vis-timeline/styles/vis-timeline-graph2d.css"
</style>
