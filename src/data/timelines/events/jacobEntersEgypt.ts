import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const jacobEntersEgypt: NestedTimelineItem = {
  id: 'jacobEntersEgypt',
  start: getDate(-1728),
  end: getDate(-1728),
  title: "Jacob's Family Enters Egypt",
  content: "Jacob's Family Enters Egypt",
  group: significantEventsGroup,
  type: 'box',
}
