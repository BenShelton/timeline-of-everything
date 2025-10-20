import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const jehoiada: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1005),
  end: getDate(-875),
  title: 'Jehoiada',
  content: 'Jehoiada',
  id: 'jehoiada',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1005),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-875),
      content: 'Estimated death date at 130',
    },
  ],
}
