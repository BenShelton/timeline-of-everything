import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const asa: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
  },
  start: getDate(-1000),
  end: getDate(-937),
  title: 'Asa',
  content: 'Asa',
  id: 'asa',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1000),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-937),
      content: 'Death date at approximately 63',
    },
  ],
}
