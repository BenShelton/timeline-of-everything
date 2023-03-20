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
  content: 'Sarah (Sarai)',
  id: 'sarah',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2008),
      content: 'Born<br><b>Genesis 23:1</b>',
    },
    {
      start: getDate(-1933),
      content: 'Gives Hagar to Abraham to bear a son<br><b>Genesis 16:3</b>',
    },
    {
      start: getDate(-1919),
      content: 'Name is changed from Sarai<br><b>Genesis 17:15</b>',
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
