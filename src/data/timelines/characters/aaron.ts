import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const aaron: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-1597),
  end: getDate(-1474),
  title: 'Aaron',
  content: 'Aaron',
  id: 'aaron',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1597),
      content: 'Born<br><b>Exodus 6:20</b>',
    },
    {
      start: getDate(-1474),
      content: 'Died<br><b>Numbers 33:39</b>',
    },
  ],
}
