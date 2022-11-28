import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const japheth: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaEnd: true,
  },
  start: getDate(-2470),
  // TODO: End
  end: getDate(-2200),
  title: 'Japheth',
  content: 'Japheth',
  id: 'japheth',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2470),
      content: 'Born<br><b>Genesis 5:32</b>',
    },
    {
      start: getDate(-2370, 9),
      content: 'Flood begins<br><b>Genesis 7:11</b>',
    },
    // {
    //   start: getDate(-2604),
    //   content: 'Died at 962<br><b>Genesis 5:20</b>'
    // }
  ],
}
