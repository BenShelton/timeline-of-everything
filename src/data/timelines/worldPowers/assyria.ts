import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const assyria: NestedTimelineItem = {
  displayOptions: {
    circaStart: true,
    complete: false,
  },
  start: getDate(-874),
  end: getDate(-625),
  title: 'Assyria',
  content: 'Assyria',
  id: 'assyria',
  group: worldPowersGroup,
  timeline: [
    {
      start: getDate(-874),
      content: 'Becomes world power',
    },
    {
      start: getDate(-700),
      content: 'Esar-Haddon overthrows Egypt around this time',
    },
    {
      start: getDate(-625),
      content: 'Babylon becomes world power',
    },
  ],
}
