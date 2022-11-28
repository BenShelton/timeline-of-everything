import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const sarah: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-2008),
  end: getDate(-1881),
  title: 'Sarah',
  content: 'Sarah',
  id: 'sarah',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2008),
      content: 'Born<br><b>Genesis 23:1</b>',
    },
    {
      start: getDate(-1918),
      content: 'Gives birth to Isaac<br><b>Genesis 21:2,5</b>',
    },
    {
      start: getDate(-1881),
      content: 'Dies at 127<br><b>Genesis 23:1</b>',
    },
  ],
}
