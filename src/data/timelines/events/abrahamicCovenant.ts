import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const abrahamicCovenant: NestedTimelineItem = {
  start: getDate(-1943),
  end: getDate(-1943),
  title: 'Abrahamic Covenant',
  content: 'Abrahamic Covenant In Effect',
  group: significantEventsGroup,
  type: 'box',
}
