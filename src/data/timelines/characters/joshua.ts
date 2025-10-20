import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const joshua: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1560),
  end: getDate(-1450),
  title: 'Joshua',
  content: 'Joshua',
  id: 'joshua',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1560),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-1450),
      content: 'Estimated death date at 110',
    },
  ],
}
