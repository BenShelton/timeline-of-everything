import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const josiah: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-667),
  end: getDate(-628),
  title: 'Josiah',
  content: 'Josiah',
  id: 'josiah',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-667),
      content: 'Birth<br><b>2 Kings 22:1</b>',
    },
    {
      start: getDate(-659),
      content: 'Became King at 8 years old<br><b>2 Kings 22:1</b>',
    },
    {
      start: getDate(-628),
      content: 'Dies at 39<br><b>2 Kings 23:29-30</b>',
    },
  ],
}
