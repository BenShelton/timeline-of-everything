import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const elisha: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-950),
  end: getDate(-850),
  title: 'Elisha',
  content: 'Elisha',
  id: 'elisha',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-950),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-850),
      content: 'Death date at approximately 100',
    },
  ],
}
