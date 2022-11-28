import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const flood: NestedTimelineItem = {
  start: getDate(-2370, 9),
  end: getDate(-2369),
  title: 'Flood',
  content: 'Flood',
  type: 'box',
  group: significantEventsGroup,
}
