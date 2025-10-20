import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const releasedFromBabylon: NestedTimelineItem = {
  start: getDate(-537),
  end: getDate(-537),
  title: 'Jews Released from Babylon',
  content: 'Jews Released from Babylon',
  group: significantEventsGroup,
  type: 'box',
}
