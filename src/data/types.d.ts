import { DataItem } from 'vis-timeline/esnext'

export interface NestedTimelineItem extends DataItem {
  timeline?: DataItem[]
  notes?: string
}
