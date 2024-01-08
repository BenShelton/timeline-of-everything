<template>
  <h2 v-text="title" />
  <h3
    v-if="info"
    v-text="info"
  />
  <h4
    v-if="subtitle"
    class="timeline-subtitle"
    v-text="subtitle"
  />
  <div ref="timeline" />
  <NestedTimeline
    v-if="nestedTimeline"
    :title="nestedTimeline.title"
    :subtitle="nestedTimeline.subtitle"
    :items="nestedTimeline.items"
    :info="nestedTimeline.info"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch, computed } from 'vue'
import { DataItem, Timeline, TimelineGroup, TimelineOptions } from 'vis-timeline/esnext'
import { NestedTimelineItem } from '../data/types'
import { prettyDate } from '@/utils'

export default defineComponent({
  name: 'NestedTimeline',

  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    info: { type: String, default: '' },
    items: { type: Array as PropType<NestedTimelineItem[]>, required: true },
    groups: { type: Array as PropType<TimelineGroup[]>, default: () => [] },
    start: { type: Date, default: null },
    end: { type: Date, default: null },
  },

  setup (props) {
    const timeline = ref<HTMLDivElement | null>(null)
    let timelineInstance: Timeline | null = null
    const nestedTimeline = ref<{ items: DataItem[], title: string, subtitle?: string, info?: string } | null>(null)

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
          group: item.group?.id,
          className: classNames.join(' '),
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
      if (props.groups.length) timelineInstance.setGroups(props.groups)
      timelineInstance.on('select', (selection) => {
        nestedTimeline.value = null
        const itemName: string = selection.items?.[0]
        if (itemName) {
          const item = items.find(i => i.id === itemName)
          if (item?.timeline) {
            const infoParts: string[] = []
            if (item.start && item.end) {
              const age = new Date(item.end).getFullYear() - new Date(item.start).getFullYear()
              infoParts.push('Age: ' + age)
            }
            const prettyTimeline = item.timeline.map(t => {
              let content = t.content
              if (t.start) {
                content += '<br><i>[' + prettyDate(t.start)
                if (t.end) content += ' - ' + prettyDate(t.end)
                content += ']</i>'
              }
              return {
                ...t,
                content,
              }
            })
            nestedTimeline.value = {
              items: prettyTimeline,
              title: item.content,
              info: infoParts.join(' | '),
              subtitle: item.notes,
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
.timeline-subtitle
  white-space: pre-wrap
</style>
