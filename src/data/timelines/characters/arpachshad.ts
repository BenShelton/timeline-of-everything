import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const arpachshad: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-2368),
  end: getDate(-1930),
  title: 'Arpachshad',
  content: 'Arpachshad',
  id: 'arpachshad',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2368),
      content: 'Born<br><b>Genesis 11:10</b>',
    },
    {
      start: getDate(-1930),
      content: 'Dies at 438<br><b>Genesis 11:12,13</b>',
    },
  ],
}
