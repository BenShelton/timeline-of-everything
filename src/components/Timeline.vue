<template>
  <h2 v-text="title" />
  <h4
    v-if="subtitle"
    v-text="subtitle"
  />
  <div ref="timeline" />
  <Timeline
    v-if="nestedTimeline"
    :title="nestedTimeline.title"
    :subtitle="nestedTimeline.subtitle"
    :items="nestedTimeline.items"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from 'vue'
import { DataItem, Timeline, TimelineOptions } from 'vis-timeline/esnext'
import { NestedTimelineItem } from '../data/types'

export default defineComponent({
  name: 'Timeline',

  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    items: { type: Array as PropType<NestedTimelineItem[]>, required: true },
    start: { type: Date, default: null },
    end: { type: Date, default: null }
  },

  setup (props) {
    const timeline = ref<HTMLDivElement | null>(null)
    let timelineInstance: Timeline | null = null
    const nestedTimeline = ref<{ items: DataItem[], title: string, subtitle?: string } | null>(null)

    function createTimeline (): void {
      if (!props.items) return
      if (!timeline.value) throw new Error('Timeline element not created')
      if (timelineInstance) timelineInstance.destroy()
      const options: TimelineOptions = {}
      if (props.start) options.start = props.start
      if (props.end) options.end = props.end
      timelineInstance = new Timeline(timeline.value, props.items, options)
      timelineInstance.on('select', (selection) => {
        nestedTimeline.value = null
        const itemName: string = selection.items?.[0]
        if (itemName) {
          const item = props.items.find(i => i.id === itemName)
          if (item?.timeline) {
            nestedTimeline.value = { items: item.timeline, title: item.content, subtitle: item.notes }
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

<style lang="sass" scoped>
:deep(.vis-content)
  .circa-start
    border-left-style: dashed
  .circa-end
    border-right-style: dashed
  .incomplete:not(.vis-selected)
    background-color: rgba(red, 0.3)
    border-color: rgba(red, 0.7)
</style>
