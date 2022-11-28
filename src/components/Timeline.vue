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
import { defineComponent, onMounted, PropType, ref, watch, computed } from 'vue'
import { DataItem, Timeline, TimelineOptions } from 'vis-timeline/esnext'
import { NestedTimelineItem } from '../data/types'

export default defineComponent({
  name: 'Timeline',

  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    items: { type: Array as PropType<NestedTimelineItem[]>, required: true },
    start: { type: Date, default: null },
    end: { type: Date, default: null },
  },

  setup (props) {
    const timeline = ref<HTMLDivElement | null>(null)
    let timelineInstance: Timeline | null = null
    const nestedTimeline = ref<{ items: DataItem[], title: string, subtitle?: string } | null>(null)

    const processedItems = computed(() => {
      if (!props.items) return []
      return props.items.map((item) => {
        const classNames = []
        if (item.displayOptions) {
          if (item.displayOptions.complete !== true) classNames.push('incomplete')
          if (item.displayOptions.circaStart === true) classNames.push('circa-start')
          if (item.displayOptions.circaEnd === true) classNames.push('circa-end')
        }
        return {
          ...item,
          className: classNames.join(' ')
        }
      })
    })

    function createTimeline (): void {
      const items = processedItems.value
      if (!items) return
      if (!timeline.value) throw new Error('Timeline element not created')
      if (timelineInstance) timelineInstance.destroy()
      const options: TimelineOptions = {}
      if (props.start) options.start = props.start
      if (props.end) options.end = props.end
      timelineInstance = new Timeline(timeline.value, items, options)
      timelineInstance.on('select', (selection) => {
        nestedTimeline.value = null
        const itemName: string = selection.items?.[0]
        if (itemName) {
          const item = items.find(i => i.id === itemName)
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
      nestedTimeline,
    }
  },
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
