<template>
  <h1>Timeline of Everything</h1>
  <NestedTimeline
    title="Main"
    :items="items"
    :groups="groups"
    :start="start"
    :end="end"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NestedTimeline from './components/NestedTimeline.vue'

import { items } from './data/timeline'
import { groups } from './data/groups'
import { getDate } from './utils'

export default defineComponent({
  name: 'App',

  components: {
    NestedTimeline,
  },

  setup () {
    const start = getDate(-4026)
    const end = new Date()

    return {
      start,
      end,
      items,
      groups,
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
