import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const egypt: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
  },
  start: getDate(-1600),
  // end: getDate(-539, 10, 5),
  title: 'Egypt',
  content: 'Egypt',
  type: 'box',
  group: worldPowersGroup,
  timeline: [
    {
      start: getDate(-1600),
      content: 'Reign is mentioned<br><b>Exodus 1:8</b>',
    },
  ],
}
