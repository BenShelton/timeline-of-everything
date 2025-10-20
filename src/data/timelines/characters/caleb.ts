import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const caleb: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaEnd: true,
  },
  start: getDate(-1552),
  end: getDate(-1450),
  title: 'Caleb',
  content: 'Caleb',
  id: 'caleb',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1552),
      content: 'Born<br><b>Numbers 32:12</b>',
    },
    {
      start: getDate(-1450),
      content: 'Estimated death date at 102',
    },
  ],
}
