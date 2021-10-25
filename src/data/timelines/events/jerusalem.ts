import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const jerusalem: NestedTimelineItem = {
  start: getDate(-607),
  end: getDate(-607),
  title: 'Fall of Jerusalem',
  content: 'Fall of Jerusalem',
  type: 'box',
  group: significantEventsGroup
}
