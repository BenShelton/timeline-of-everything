import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const nehemiah: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-485),
  end: getDate(-385),
  title: 'Nehemiah',
  content: 'Nehemiah',
  id: 'nehemiah',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-485),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-385),
      content: 'Death date at approximately 100',
    },
  ],
}
