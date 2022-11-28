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
    Timeline,
  },

  setup () {
    const start = getDate(-4026)
    const end = new Date()

    return {
      start,
      end,
      items,
    }
  },
})
</script>

<style lang="sass">
@import 'vis-timeline/styles/vis-timeline-graph2d.css'
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap')

body
  font-family: 'Lato', sans-serif
  font-weight: 300
h1
  font-family: 'Bree Serif', serif
</style>
