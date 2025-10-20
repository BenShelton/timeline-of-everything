import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const saulAnointed: NestedTimelineItem = {
  start: getDate(-1117),
  end: getDate(-1117),
  title: 'Saul Anointed',
  content: 'Samuel Anoints Saul As King',
  group: significantEventsGroup,
  type: 'box',
}
