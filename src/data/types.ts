import { DataItem } from 'vis-timeline/esnext'

export interface NestedTimelineItem extends Omit<DataItem, 'className'> {
  timeline?: DataItem[]
  notes?: string
  displayOptions?: {
    complete?: boolean
    circaStart?: boolean
    circaEnd?: boolean
  }
}
