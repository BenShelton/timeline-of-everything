import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const templeRebuilt: NestedTimelineItem = {
  start: getDate(-515),
  end: getDate(-515),
  title: 'Temple Rebuilt In Jerusalem',
  content: 'Temple Rebuilt In Jerusalem',
  group: significantEventsGroup,
  type: 'box',
}
