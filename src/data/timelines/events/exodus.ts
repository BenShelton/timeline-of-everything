import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const exodus: NestedTimelineItem = {
  start: getDate(-1513),
  end: getDate(-1513),
  title: 'Exodus from Egypt',
  content: 'Exodus from Egypt',
  type: 'box',
  group: significantEventsGroup,
}
