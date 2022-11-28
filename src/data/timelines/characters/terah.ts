import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const terah: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-2088),
  end: getDate(-1883),
  title: 'Terah',
  content: 'Terah',
  id: 'terah',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2088),
      content: 'Born<br><b>Genesis 11:26</b>',
    },
    {
      start: getDate(-2018),
      content: 'Becomes father to Abram, Nahor & Haran<br><b>Genesis 11:26</b>',
    },
    {
      start: getDate(-1883),
      content: 'Dies at 205<br><b>Genesis 11:32</b>',
    },
  ],
}
