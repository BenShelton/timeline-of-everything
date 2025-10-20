import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const jonathan: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1138),
  end: getDate(-1078),
  title: 'Jonathan',
  content: 'Jonathan',
  id: 'jonathan',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1138),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-1078),
      content: 'Estimated death date at 60',
    },
  ],
}
