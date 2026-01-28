import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const jesus: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-2, 10),
  end: getDate(33, 4),
  title: 'Jesus',
  content: 'Jesus',
  id: 'jesus',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2, 10),
      content: 'Born<br><b>Luke 1:7</b>',
    },
    {
      start: getDate(33, 4),
      content: 'Killed<br><b>John 19:30</b>',
    },
  ],
}
