import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const egypt: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1600),
  end: getDate(-700),
  title: 'Egypt',
  content: 'Egypt',
  id: 'egypt',
  group: worldPowersGroup,
  timeline: [
    {
      start: getDate(-1600),
      content: 'Reign is mentioned<br><b>Exodus 1:8</b>',
    },
    {
      start: getDate(-700),
      content: 'Overthrown by Esar-Haddon around this time',
    },
  ],
}
