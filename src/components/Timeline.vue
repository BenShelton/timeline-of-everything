<template>
  <h2 v-text="title" />
  <div ref="timeline" />
  <Timeline
    v-if="nestedTimeline"
    :title="nestedTimeline.title"
    :items="nestedTimeline.items"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from 'vue'
import { DataItem, Timeline } from 'vis-timeline/esnext'

import * as timelines from '../data/timelines'

export default defineComponent({
  name: 'Timeline',

  props: {
    title: { type: String, required: true },
    items: { type: Object as PropType<DataItem[]>, required: true },
    start: { type: Date, default: null },
    end: { type: Date, default: null }
  },

  setup (props) {
    const timeline = ref<HTMLDivElement | null>(null)
    let timelineInstance: Timeline | null = null
    const nestedTimeline = ref<{ items: DataItem[], title: string } | null>(null)

    function createTimeline (): void {
      if (!props.items) return
      if (!timeline.value) throw new Error('Timeline element not created')
      if (timelineInstance) timelineInstance.destroy()
      timelineInstance = new Timeline(timeline.value, props.items, {
        start: props.start ?? undefined,
        end: props.end ?? undefined
      })
      timelineInstance.on('select', (selection) => {
        nestedTimeline.value = null
        const itemName = selection.items?.[0]
        if (itemName) {
          const item = props.items?.find(i => i.id === itemName)
          if (item) {
            const tl = timelines[item.id as keyof typeof timelines]
            if (tl) {
              nestedTimeline.value = { items: tl, title: item.content }
            }
          }
        }
      })
    }

    onMounted(() => {
      createTimeline()
    })

    watch(() => props.items, () => {
      createTimeline()
    })

    return {
      timeline,
      nestedTimeline
    }
  }
})
</script>
