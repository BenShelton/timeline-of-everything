import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const exodus: NestedTimelineItem = {
  id: 'exodus',
  start: getDate(-1513, 3),
  end: getDate(-1513, 3),
  title: 'Exodus from Egypt',
  content: 'Exodus from Egypt',
  type: 'box',
  group: significantEventsGroup,
  notes: 'Nisan 14',
}
