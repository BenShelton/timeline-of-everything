import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const babylon: NestedTimelineItem = {
  id: 'event-babylon',
  start: getDate(-539, 10, 5),
  end: getDate(-539, 10, 5),
  title: 'Fall of Babylon',
  content: 'Fall of Babylon',
  type: 'box',
  group: significantEventsGroup,
}
