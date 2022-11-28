import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const shem: NestedTimelineItem = {
  className: 'incomplete circa-end',
  start: getDate(-2468),
  end: getDate(-1868),
  title: 'Shem',
  content: 'Shem',
  id: 'shem',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2468),
      content: 'Born<br><b>Genesis 11:10</b>',
    },
    {
      start: getDate(-2370, 9),
      content: 'Flood begins<br><b>Genesis 7:11</b>',
    },
    {
      start: getDate(-2368),
      content: 'Becomes father to Arpachshad<br><b>Genesis 11:10</b>',
    },
    {
      start: getDate(-1868),
      content: 'Died at 600<br><b>Genesis 11:11</b>',
    },
  ],
}
