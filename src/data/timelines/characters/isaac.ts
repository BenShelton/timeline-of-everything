import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const isaac: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-1918),
  end: getDate(-1738),
  title: 'Isaac',
  content: 'Isaac',
  id: 'isaac',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1918),
      content: 'Born<br><b>Genesis 21:2,5</b>',
    },
    {
      start: getDate(-1913),
      content: 'Taunted by Ishmael, starting 400 year affliction<br><b>Genesis 21:8-13</b>',
    },
    {
      start: getDate(-1878),
      content: 'Marries Rebekah<br><b>Genesis 25:20</b>',
    },
    {
      start: getDate(-1858),
      content: 'Becomes father to Esau & Jacob<br><b>Genesis 25:26</b>',
    },
    {
      start: getDate(-1738),
      content: 'Dies at 180<br><b>Genesis 35:28,29</b>',
    },
  ],
}
