import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const israelEntersCanaan: NestedTimelineItem = {
  start: getDate(-1473),
  end: getDate(-1473),
  title: 'Israel Enters Canaan',
  content: 'Israel Enters Canaan',
  group: significantEventsGroup,
  type: 'box',
}
