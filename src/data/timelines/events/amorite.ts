import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const amorite: NestedTimelineItem = {
  start: getDate(-1474),
  end: getDate(-1474),
  title: 'Amorite Kingdom Conquered by Israel',
  content: 'Amorite Kingdom Conquered by Israel',
  type: 'box',
  group: significantEventsGroup,
  notes: 'City of Aroer, Southermost city of the Amorite Kingdom at time of conquest',
  timeline: [
    {
      start: getDate(-1474),
      content: 'Amorite Kingdom Conquered by Israel<br><b>Deuteronomy 4:47,48</b>',
    },
  ],
}
