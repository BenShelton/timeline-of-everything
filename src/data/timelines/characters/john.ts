import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const john: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-2, 4),
  end: getDate(32, 3),
  title: 'John the Baptist',
  content: 'John the Baptist',
  id: 'johnBaptist',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2, 4),
      content: 'Born<br><b>Luke 1:57,60</b>',
    },
    {
      start: getDate(32, 3),
      content: 'Killed<br><b>Matthew 14:8-12</b>',
    },
  ],
}
