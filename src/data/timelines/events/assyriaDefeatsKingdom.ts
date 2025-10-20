import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const assyriaDefeatsKingdom: NestedTimelineItem = {
  start: getDate(-740),
  end: getDate(-740),
  title: 'Assyria Defeats Ten Tribe Kingdom',
  content: 'Assyria Defeats Ten Tribe Kingdom',
  group: significantEventsGroup,
  type: 'box',
}
