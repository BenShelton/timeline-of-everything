import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const seth: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-3896),
  end: getDate(-2984),
  title: 'Seth',
  content: 'Seth',
  id: 'seth',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3896),
      content: 'Born<br><b>Genesis 5:3</b>',
    },
    {
      start: getDate(-3791),
      content: 'Enosh is born at 105<br><b>Genesis 5:6</b>',
    },
    {
      start: getDate(-2984),
      content: 'Died at 912<br><b>Genesis 5:8</b>',
    },
  ],
}
